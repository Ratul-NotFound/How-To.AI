"""Banking, Personal Finance, Investments & Business (95 scenarios)"""

def populate_finance(add):
    cat = "Banking, Finance & Investments"
    
    items = [
        # Personal Banking & Deposits
        ("Personal Banking", "Selecting Sanchayapatra (National Savings Certificate) categories", 
         "Investing beyond individual investment limits (e.g. 50 Lakh BDT) triggers automatic forfeiture of profits.", 
         "Check Paribar Sanchayapatra, Pensioner, or 3-Month Profit scheme eligibility, e-TIN, NID", "Source tax deduction of 10% and profit reversal penalties"),
        ("Personal Banking", "Opening DPS (Deposit Pension Scheme) and premature closure penalty", 
         "Closing DPS before 1 year forfeits all interest and incurs administrative penalty charges.", 
         "Check compound interest calculation, grace period for late monthly installments (usually 30 days)", "Losing months of accrued interest on emergency withdrawal"),
        ("Personal Banking", "Opening a Joint Bank Account: 'Either or Survivor' vs 'Jointly Operated'", 
         "In 'Jointly Operated' accounts, both signatures are required for every single cheque or withdrawal.", 
         "Select 'Either or Survivor' clause to allow seamless access if one partner falls ill or passes away", "Funds frozen completely if one spouse is incapacitated"),
        ("Personal Banking", "Handling Dormant / Inactive Bank Account revival", 
         "Accounts with no customer-initiated transaction for 1-2 years are frozen by central bank regulations.", 
         "Submit fresh KYC form, biometric verification, small cash deposit or withdrawal at home branch", "Cheques bouncing and automated utility auto-debits failing"),
        ("Personal Banking", "Updating Bank Account Nominee vs Legal Heirs Succession rights", 
         "Under legal precedent in Bangladesh, a nominee is merely a custodian, not the absolute legal owner of funds.", 
         "Nominee form with NID and photo; prepare registered will if specific distribution is desired", "Bitter court battles between nominee and other family heirs"),

        # Credit Cards & Digital Payments
        ("Cards & Payments", "Avoiding the 'Minimum Amount Due' trap on Credit Cards", 
         "Paying only the minimum due incurs compounding interest of 20-25% on the entire balance from purchase date.", 
         "Always pay 'Total Amount Due' before due date; set up auto-debit from salary account", "Debt spiraling out of control into hundreds of thousands in interest"),
        ("Cards & Payments", "Getting Credit Card Annual Fee Waived (14-18 transactions rule)", 
         "Banks quietly charge 3,000-10,000 BDT annual fee unless minimum transaction count is met.", 
         "Track monthly POS/online swipes; call call-center immediately when annual fee appears on statement", "Paying unnecessary bank charges every year"),
        ("Cards & Payments", "Filing a Credit Card Chargeback for undelivered online goods", 
         "Banks must initiate Visa/Mastercard dispute resolution if merchant fails to deliver within promised window.", 
         "Chargeback dispute form within 45-60 days of transaction, merchant chat logs, invoice", "Losing money to fraudulent e-commerce scams"),
        ("Cards & Payments", "Recovering money sent to wrong bKash / Nagad / Upay account", 
         "Once cashout occurs, MFS providers cannot reverse funds without recipient's formal consent or police GD.", 
         "Call MFS helpline immediately to freeze recipient wallet; file police GD at Thana within hours", "Permanent loss of transferred money if recipient cashes out"),
        ("Cards & Payments", "Protecting against MFS (bKash/Nagad) social engineering OTP scams", 
         "Scammers impersonate helpline officers claiming your account is locked and asking for 5-digit PIN/OTP.", 
         "Never disclose PIN or SMS OTP to anyone under any circumstances; official staff never ask for PIN", "Entire mobile wallet balance drained within 30 seconds"),

        # Loans & Mortgages
        ("Loans & Debt", "Checking CIB (Credit Information Bureau) report before applying for home loan", 
         "A single forgotten 500 BDT overdue on an old credit card flags you as 'Defaulter' in Bangladesh Bank CIB.", 
         "Request self CIB report via Bangladesh Bank portal; clear all legacy unclosed credit cards", "Instant rejection of home loan application after paying non-refundable fees"),
        ("Loans & Debt", "Floating vs Fixed Interest Rate terms in Home Loans", 
         "Banks advertise low 8% teaser rates that jump to 12% after the first year under floating rate clauses.", 
         "Check interest rate reset frequency, Bangladesh Bank reference SMART rate spread", "Monthly EMI jumping by 25%, breaking family budget"),
        ("Loans & Debt", "Negotiating Loan Prepayment / Early Settlement Penalty", 
         "Banks charge 1-2% penalty fee if you pay off your loan early using your own savings.", 
         "Ensure agreement states zero prepayment penalty from personal income sources", "Paying 50,000+ BDT just for the privilege of clearing your own debt early"),
        ("Loans & Debt", "Applying for SME (Small & Medium Enterprise) loan from commercial banks", 
         "Banks reject 80% of SME loans due to lack of audited cash flow records and trade license tenure.", 
         "Minimum 2-3 years trade license, daily sales ledger (khatiyan), VAT returns, collateral valuation", "Desperate borrowing from loan sharks at 10% monthly interest"),
        ("Loans & Debt", "Drafting a legally binding Promissory Note / IOU for personal lending", 
         "Lending money to friends/relatives on verbal promises leaves zero legal evidence for recovery.", 
         "Special revenue stamp paper (300 BDT), 2 independent witnesses, signed bank cross-cheque", "Total loss of lent money and destroyed relationships"),

        # Stock Market & Investments
        ("Investments", "Opening a BO (Beneficiary Owner) Account for Stock Market", 
         "Unregistered sub-brokerage accounts expose investors to broker portfolio mismanagement.", 
         "CDBL-registered brokerage firm, bank account statement, routing number, nominee NID", "Broker unauthorized trading or failure to credit dividends"),
        ("Investments", "Applying for Initial Public Offerings (IPO) through Pro-Rata allocation", 
         "Investors must maintain minimum secondary market portfolio equity to qualify for IPO quotas.", 
         "Verify Bangladesh Securities and Exchange Commission (BSEC) minimum equity threshold (e.g. 50,000 BDT)", "IPO application rejected and application fee forfeited"),
        ("Investments", "Spotting MLM / Ponzi investment scams (e.g. MTFE / E-commerce cashback)", 
         "Any scheme promising 'guaranteed 20-30% monthly return' is a mathematical Ponzi fraud.", 
         "Check BSEC license; verify company does not require recruiting friends to unlock earnings", "Losing entire family life savings and community ostracization"),
        ("Investments", "Investing in Treasury Bonds via Bangladesh Bank MI Module", 
         "Long-term sovereign government bonds provide risk-free guaranteed yields with zero default risk.", 
         "Open Business Partner (BP) ID through primary dealer bank, participate in central bank auctions", "Missing out on safe 11-12% sovereign yields"),
        ("Investments", "Evaluating Mutual Funds: Open-Ended vs Closed-Ended Funds", 
         "Closed-ended mutual funds often trade at a steep 30-40% discount to their Net Asset Value (NAV).", 
         "Check Asset Management Company (AMC) track record, portfolio disclosure, expense ratio (<2%)", "Capital erosion due to high fund manager fees and low returns")
    ]
    
    for item in items:
        if len(item) == 5:
            sub, title, prob, check, risk = item
            dont = prob
        elif len(item) == 6:
            sub, title, prob, dont, check, risk = item
        add(cat, sub, title, prob, dont, check, risk)

print("Finance module ready.")
