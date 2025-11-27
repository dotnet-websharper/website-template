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
    let OrgPrefix = "IntelliFactory-"

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
                                    let fullOrgName = OrgPrefix + GitHubOrgName.Value
                                    
                                    let! ok = Api.SetGitHubOrgName fullOrgName
                                    
                                    if ok then
                                        GitHubOrgVar.Value <- 
                                            Some { 
                                                name = Some fullOrgName 
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
                            JS.Window.Open("https://github.com/" + name, "_blank") |> ignore
                        )
                        .Doc()
                | _ -> Doc.Empty
        )