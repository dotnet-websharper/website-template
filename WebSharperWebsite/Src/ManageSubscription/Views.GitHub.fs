namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client

open Types
open State

open WebSharperWebsite
open WebSharperWebApi

[<JavaScript>]
module ViewsGitHub =

    let GitHubOrgName = Var.Create ""

    let GitHubBody =
        GitHubOrgVar.View.Doc(fun orgOpt ->
            match orgOpt with
            | None -> Doc.Empty
            | Some org ->
                match org.status, org.name with
                | GitHubOrgPending, None ->
                    Templates.ManageSubscriptionTemplate.GitHubPendingInput()
                        .GitHubOrgName(GitHubOrgName)
                        .SetGitHubOrgName(fun _ -> 
                            async {
                                Views.setLoading true
                                try
                                    do! Remote<IRemotingContract>.SetGitHubOrgName GitHubOrgName.Value
                                    GitHubOrgVar.Value <- 
                                        Some { 
                                            name = Some GitHubOrgName.Value 
                                            status = GitHubOrgPending
                                        }
                                finally
                                    Views.setLoading false
                            }
                            |> Async.StartImmediate
                        )
                        .Doc()
                | GitHubOrgPending, Some name ->
                    Templates.ManageSubscriptionTemplate.GitHubPending()
                        .GitHubOrgName(name)
                        .Doc()
                | GitHubOrgActive, Some name ->
                    Templates.ManageSubscriptionTemplate.GitHubActive()
                        .GoToGitHubOrg(fun _ ->
                            JS.Window.Open("https://github.com/IntelliFactory-" + name, "_blank") |> ignore
                        )
                        .Doc()
                | _ -> Doc.Empty
        )