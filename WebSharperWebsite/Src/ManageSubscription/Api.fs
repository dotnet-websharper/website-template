namespace WebSharperWebsite.ManageSubscription

open WebSharper
open WebSharper.JavaScript
open WebSharper.JavaScript.Dom
open Types

[<JavaScript>]
module Api =

    // Mock DB - TODO: replace with real HTTP calls
    let mutable mockSubs = [|
        { id = "sub_1"; label = "Professional (5 seats) — Jul 12 2025"; plan = "Professional"; 
        totalSeats = 5; renewsAt = "2025-07-12"; status = "active";   currency = "usd" }

        { id = "sub_2"; label = "Professional (10 seats) — Aug 12 2025"; plan = "Professional"; 
        totalSeats = 10; renewsAt = "2025-08-12"; status = "trialing"; currency = "usd" }
    |]

    let mutable mockInvoices =
        dict [
            "sub_1",
                [|
                    { 
                        id = "inv_2025_0001"
                        date = "2025-07-12"
                        amount = 250000; 
                        currency = "usd" 
                        status = "paid"
                        subscription = None
                        billingAddress = Some { 
                            line1 = "Main St 1" 
                            city = "Budapest" 
                            postal_code = "1011" 
                            country = "HU" 
                        }
                        company = Some { 
                            name = "ACME Inc." 
                            vatin = "EU123" 
                        }  
                    }

                    { 
                        id = "inv_2025_0002"
                        date = "2025-08-12"
                        amount = 250000
                        currency = "usd"
                        status = "open"
                        subscription = None
                        billingAddress = Some { 
                            line1 = "Main St 1" 
                            city = "Budapest" 
                            postal_code = "1011" 
                            country = "HU" 
                        }
                        company = Some { 
                            name = "ACME Inc." 
                            vatin = "EU123" 
                        } 
                    }
                |]
            "sub_2",
                [|
                    { id = "inv_2025_0003"; date = "2025-08-12"; amount = 500000; currency = "usd"; 
                    status = "paid"; subscription = None; billingAddress = None; company = None }
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

    let mutable mockBilling : BillingRecord = {
        company = Some {
            name = ""
            vatin = ""
        }
        address = {
            line1 = ""
            city = ""
            postal_code = ""
            country = ""
        }
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
            let updated =
                rows
                |> Array.map (fun row ->
                    if row.seatNo = seatNo then
                        {
                            row with
                                username = username
                                status =
                                    if System.String.IsNullOrWhiteSpace username then
                                        "available"
                                    else
                                        "assigned"
                        }
                    else
                        row
                )
            mockSeats.[subId] <- updated
        | _ -> ()


    let UnassignSeat (subId: string) (seatNo: int) : unit =
        match mockSeats.TryGetValue subId with
        | true, rows ->
            let updated =
                rows
                |> Array.map (fun row ->
                    if row.seatNo = seatNo then
                        { row with username = ""; status = "available" }
                    else
                        row
                )
            mockSeats.[subId] <- updated
        | _ -> ()


    let BulkAssign (subId: string) (usernames: string array) : unit =
        match mockSeats.TryGetValue subId with
        | true, rows ->
            let queue = System.Collections.Generic.Queue(usernames)
            let updated =
                rows
                |> Array.map (fun row ->
                    if queue.Count > 0 && System.String.IsNullOrWhiteSpace row.username then
                        let nextUsername = queue.Dequeue()
                        {
                            row with
                                username = nextUsername
                                status   = "assigned"
                        }
                    else
                        row
                )
            mockSeats.[subId] <- updated
        | _ -> ()


    let SetAutoRenew (subId: string) (expiry: string) (autoRenew: bool) : unit =
        match mockSeats.TryGetValue subId with
        | true, rows ->
            let updated =
                rows
                |> Array.map (fun row ->
                    if row.expiry = expiry then
                        { row with autoRenew = autoRenew }
                    else
                        row
                )
            mockSeats.[subId] <- updated
        | _ -> ()


    let GetBilling () : BillingRecord = mockBilling

    let SaveBilling (data: BillingRecord) : unit =
        mockBilling <- data
