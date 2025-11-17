namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom
open Types

[<JavaScript>]
module Api =

    // Mock DB - TODO: replace with real HTTP calls
    let mutable mockSubs = [|
        { id = "sub_1"; label = "Professional (5 seats) — Jul 12 2025"; plan = "Professional"; totalSeats = 5; renewsAt = "2025-07-12"; status = "active";   currency = "usd" }
        { id = "sub_2"; label = "Professional (10 seats) — Aug 12 2025"; plan = "Professional"; totalSeats = 10; renewsAt = "2025-08-12"; status = "trialing"; currency = "usd" }
    |]

    let mutable mockInvoices =
        dict [
            "sub_1",
                [|
                    { id = "inv_2025_0001"; date = "2025-07-12"; amount = 250000; currency = "usd"; status = "paid" }
                    { id = "inv_2025_0002"; date = "2025-08-12"; amount = 250000; currency = "usd"; status = "open" }
                |]
            "sub_2",
                [|
                    { id = "inv_2025_0003"; date = "2025-08-12"; amount = 500000; currency = "usd"; status = "paid" }
                |]
        ]
        |> System.Collections.Generic.Dictionary

    let mutable mockSeats =
        dict [
            "sub_1",
                [|
                    // Group 1, expires 2026-07-12, auto renew on
                    { seatNo = 1; username = "alice";   status = "assigned";  expiry = "2026-07-12"; autoRenew = true }
                    { seatNo = 2; username = "bob-dev"; status = "assigned";  expiry = "2026-09-01"; autoRenew = true }
                    { seatNo = 3; username = "";        status = "available"; expiry = "2026-07-12"; autoRenew = true }

                    // Group 2, expires 2026-09-01, auto renew off
                    { seatNo = 4; username = ""; status = "available"; expiry = "2026-09-01"; autoRenew = false }
                    { seatNo = 5; username = ""; status = "available"; expiry = "2026-09-01"; autoRenew = false }
                |]

            "sub_2",
                // One big group, all expire on the same date, auto renew on
                Array.init 10 (fun i ->
                    {
                        seatNo = i + 1
                        username = ""
                        status = "available"
                        expiry = "2026-08-12"
                        autoRenew = true
                    })
        ]
        |> System.Collections.Generic.Dictionary

    let mutable mockBilling = {
        name = ""; vatin = ""; line1 = ""; city = ""
        postal_code = ""; country = ""
    }

    // Mock API - replace with real endpoints later
    let ListSubscriptions () : SubRecord array =
        mockSubs

    let GetSeats (subId: string) : SeatRecord array =
        match mockSeats.TryGetValue subId with
        | true, rows -> rows |> Array.map id
        | _ -> [||]

    let GetInvoices (subId: string) : InvoiceRecord array =
        match mockInvoices.TryGetValue subId with
        | true, rows -> rows |> Array.map id
        | _ -> [||]

    let AssignSeat (subId: string) (seatNo: int) (username: string) : unit =
        match mockSeats.TryGetValue subId with
        | true, rows ->
            rows
            |> Array.tryFind (fun row -> row.seatNo = seatNo)
            |> Option.iter (fun row ->
                row.username <- username
                row.status <- if username = "" then "available" else "assigned")
        | _ -> ()

    let UnassignSeat (subId: string) (seatNo: int) : unit =
        match mockSeats.TryGetValue subId with
        | true, rows ->
            rows
            |> Array.tryFind (fun row -> row.seatNo = seatNo)
            |> Option.iter (fun r ->
                r.username <- ""
                r.status <- "available")
        | _ -> ()

    let BulkAssign (subId: string) (usernames: string array) : unit =
        match mockSeats.TryGetValue subId with
        | true, rows ->
            let queue = System.Collections.Generic.Queue(usernames)
            for row in rows do
                if queue.Count > 0 && row.username = "" then
                    let nextUsername = queue.Dequeue()
                    row.username <- nextUsername
                    row.status <- "assigned"
        | _ -> ()

    let SetAutoRenew (subId: string) (expiry: string) (autoRenew: bool) : unit =
        match mockSeats.TryGetValue subId with
        | true, rows ->
            for row in rows do
                if row.expiry = expiry then
                    row.autoRenew <- autoRenew
        | _ -> ()

    let GetBilling () : BillingRecord = mockBilling

    let SaveBilling (data: BillingRecord) : unit =
        mockBilling.name <- data.name
        mockBilling.vatin <- data.vatin
        mockBilling.line1 <- data.line1
        mockBilling.city <- data.city
        mockBilling.postal_code <- data.postal_code
        mockBilling.country <- data.country
