// ═══════════════════════════════════════════════════════════
// NEXT Ventures — Internal Operations Platform v2.0
// Shared Data Model & Utilities
// ═══════════════════════════════════════════════════════════

const NV = (() => {

  // ── Departments ──────────────────────────────────────────
  const DEPTS = {
    technology:    { name: "Technology",                          icon: "💻", color: "#818CF8", headcount: 45 },
    client_exp:    { name: "Client Experience",                   icon: "🤝", color: "#34D399", headcount: 22 },
    operations:    { name: "Operations",                          icon: "⚙️", color: "#60A5FA", headcount: 18 },
    marketing:     { name: "Marketing",                           icon: "📢", color: "#FB923C", headcount: 16 },
    payments:      { name: "Payments & Treasury",                 icon: "💰", color: "#FBBF24", headcount: 14 },
    prod_bi:       { name: "Product & Business Intelligence",     icon: "📊", color: "#2DD4BF", headcount: 12 },
    trading:       { name: "Trading & Risk Operations",           icon: "📈", color: "#F472B6", headcount: 20 },
    admin_comp:    { name: "Admin, Compliance & Corporate Affairs",icon: "🏛", color: "#94A3B8", headcount: 10 },
    product:       { name: "Product",                             icon: "🎯", color: "#A78BFA", headcount: 15 },
    finance:       { name: "Finance & Audit",                     icon: "📋", color: "#38BDF8", headcount: 12 },
    community:     { name: "Community & Partner Management",      icon: "🌐", color: "#E879F9", headcount: 11 },
    people:        { name: "People & Culture",                    icon: "💜", color: "#FB7185", headcount: 14 },
  };

  // ── Users ────────────────────────────────────────────────
  const USERS = {
    // People & Culture (Admin / Superuser)
    nadia:    { name: "Nadia Rahman",       title: "Director, People & Culture",             dept: "people",     role: "admin" },
    farida:   { name: "Farida Begum",       title: "People & Culture Executive",             dept: "people",     role: "employee" },

    // Technology
    rashid:   { name: "Rashid Khan",        title: "Head of Technology",                     dept: "technology", role: "depthead" },
    tanvir:   { name: "Tanvir Islam",       title: "Software Engineer",                      dept: "technology", role: "employee" },
    sadia:    { name: "Sadia Khanam",       title: "Frontend Developer",                     dept: "technology", role: "employee" },
    imran:    { name: "Imran Hossain",      title: "Backend Engineer",                       dept: "technology", role: "employee" },
    zahid:    { name: "Zahid Reza",         title: "QA Engineer",                            dept: "technology", role: "employee" },

    // Client Experience
    samira:   { name: "Samira Hossain",     title: "Head of Client Experience",              dept: "client_exp", role: "depthead" },
    rifat:    { name: "Rifat Hasan",        title: "Client Success Manager",                 dept: "client_exp", role: "employee" },
    naima:    { name: "Naima Akter",        title: "Support Specialist",                     dept: "client_exp", role: "employee" },

    // Operations
    mahbub:   { name: "Mahbub Alam",        title: "Head of Operations",                     dept: "operations", role: "depthead" },
    kamal:    { name: "Kamal Hasan",        title: "Operations Coordinator",                 dept: "operations", role: "employee" },
    tasnim:   { name: "Tasnim Jahan",       title: "Process Analyst",                        dept: "operations", role: "employee" },

    // Marketing
    karim:    { name: "Karim Ahmed",        title: "Head of Marketing",                      dept: "marketing",  role: "depthead" },
    ritu:     { name: "Ritu Sharma",        title: "Content Strategist",                     dept: "marketing",  role: "employee" },
    meher:    { name: "Meher Afroz",        title: "Creative Lead",                          dept: "marketing",  role: "employee" },

    // Payments & Treasury
    farhana:  { name: "Farhana Akter",      title: "Head of Payments & Treasury",            dept: "payments",   role: "depthead" },
    priya:    { name: "Priya Sen",          title: "Treasury Analyst",                       dept: "payments",   role: "employee" },
    ayesha:   { name: "Ayesha Siddiqua",    title: "Payment Operations Executive",           dept: "payments",   role: "employee" },

    // Product & Business Intelligence
    arman:    { name: "Arman Chowdhury",    title: "Head of Product & BI",                   dept: "prod_bi",    role: "depthead" },
    sumaiya:  { name: "Sumaiya Islam",      title: "BI Analyst",                             dept: "prod_bi",    role: "employee" },

    // Trading & Risk Operations
    jamal:    { name: "Jamal Uddin",        title: "Head of Trading & Risk",                 dept: "trading",    role: "depthead" },
    rahim:    { name: "Rahim Chowdhury",    title: "Risk Analyst",                           dept: "trading",    role: "employee" },
    shirin:   { name: "Shirin Sultana",     title: "Trading Operations Lead",                dept: "trading",    role: "employee" },

    // Admin, Compliance & Corporate Affairs
    monir:    { name: "Monir Hossain",      title: "Head of Admin & Compliance",             dept: "admin_comp", role: "depthead" },
    lubna:    { name: "Lubna Yasmin",       title: "Compliance Officer",                     dept: "admin_comp", role: "employee" },

    // Product
    tania:    { name: "Tania Sultana",      title: "Head of Product",                        dept: "product",    role: "depthead" },
    sabbir:   { name: "Sabbir Rahman",      title: "Product Manager",                        dept: "product",    role: "employee" },

    // Finance & Audit
    shaheen:  { name: "Shaheen Ahmed",      title: "Head of Finance & Audit",                dept: "finance",    role: "depthead" },
    arif:     { name: "Arif Mahmud",        title: "Senior Auditor",                         dept: "finance",    role: "employee" },

    // Community & Partner Management
    nabila:   { name: "Nabila Khan",        title: "Head of Community & Partners",           dept: "community",  role: "depthead" },
    rakib:    { name: "Rakib Hasan",        title: "Partner Relations Manager",              dept: "community",  role: "employee" },
  };

  // Helper: get dept head user key for a department
  function getDeptHead(deptKey) {
    return Object.keys(USERS).find(k => USERS[k].dept === deptKey && USERS[k].role === 'depthead');
  }

  // Helper: get first employee for a department (for demo member view)
  function getDefaultEmployee(deptKey) {
    return Object.keys(USERS).find(k => USERS[k].dept === deptKey && USERS[k].role === 'employee');
  }

  // ── Modules (17 — preserved from v1) ────────────────────
  const MODS = {
    leave:        { label: "Leave",            icon: "🏖", color: "#818CF8", fields: [{ k:"type",l:"Leave Type",t:"select",o:["Annual","Casual","Sick","Emergency","Unpaid"]},{k:"from",l:"From",t:"date"},{k:"to",l:"To",t:"date"},{k:"reason",l:"Reason",t:"textarea"}] },
    wfh:          { label: "Work From Home",   icon: "🏠", color: "#34D399", fields: [{ k:"from",l:"From",t:"date"},{k:"to",l:"To",t:"date"},{k:"tasks",l:"Task Plan",t:"textarea"}] },
    overtime:     { label: "Overtime",         icon: "⏱",  color: "#FBBF24", fields: [{ k:"date",l:"Date",t:"date"},{k:"hours",l:"Hours",t:"number"},{k:"project",l:"Project",t:"text"}] },
    loan:         { label: "Salary Advance",   icon: "💳", color: "#F472B6", fields: [{ k:"amount",l:"Amount (BDT)",t:"number"},{k:"months",l:"Repay in (months)",t:"number"},{k:"reason",l:"Purpose",t:"textarea"}] },
    expense:      { label: "Expense",          icon: "🧾", color: "#2DD4BF", fields: [{ k:"amount",l:"Amount (BDT)",t:"number"},{k:"cat",l:"Category",t:"select",o:["Travel","Meals","Supplies","Training","Other"]},{k:"receipt",l:"Receipt No.",t:"text"},{k:"notes",l:"Notes",t:"textarea"}] },
    it_asset:     { label: "IT Asset",         icon: "💻", color: "#A78BFA", fields: [{ k:"asset",l:"Asset",t:"select",o:["Laptop","Monitor","Keyboard","Mouse","Headset","Other"]},{k:"reason",l:"Justification",t:"textarea"}] },
    travel:       { label: "Travel",           icon: "✈️", color: "#FB923C", fields: [{ k:"dest",l:"Destination",t:"text"},{k:"dep",l:"Departure",t:"date"},{k:"ret",l:"Return",t:"date"},{k:"purpose",l:"Purpose",t:"textarea"}] },
    manpower:     { label: "Manpower",         icon: "👥", color: "#60A5FA", fields: [{ k:"role",l:"Role",t:"text"},{k:"dept",l:"Department",t:"text"},{k:"count",l:"Headcount",t:"number"},{k:"reason",l:"Justification",t:"textarea"}] },
    training:     { label: "Training",         icon: "📚", color: "#86EFAC", fields: [{ k:"course",l:"Course / Program",t:"text"},{k:"provider",l:"Provider",t:"text"},{k:"cost",l:"Cost (BDT)",t:"number"},{k:"date",l:"Start Date",t:"date"}] },
    resign:       { label: "Resignation",      icon: "🚪", color: "#F87171", fields: [{ k:"last_day",l:"Last Working Day",t:"date"},{k:"reason",l:"Reason (optional)",t:"textarea"}] },
    salary_cert:  { label: "Salary Certificate",icon:"📋", color: "#38BDF8", fields: [{ k:"purpose",l:"Purpose",t:"select",o:["Bank Loan","Visa Application","Rental Agreement","Other"]},{k:"addressed_to",l:"Addressed To",t:"text"},{k:"notes",l:"Additional Notes",t:"textarea"}] },
    insurance:    { label: "Insurance",        icon: "🏥", color: "#E879F9", fields: [{ k:"type",l:"Request Type",t:"select",o:["Enrollment","Claim","Add Dependent","Update Info"]},{k:"details",l:"Details",t:"textarea"}] },
    confirmation: { label: "Confirmation",     icon: "✅", color: "#4ADE80", fields: [{ k:"type",l:"Confirmation Type",t:"select",o:["Standard","Early Confirmation"]},{k:"join_date",l:"Joining Date",t:"date"},{k:"manager_remarks",l:"Manager Remarks",t:"textarea"}] },
    attendance:   { label: "Attendance",       icon: "🕐", color: "#94A3B8", fields: [{ k:"date",l:"Date",t:"date"},{k:"type",l:"Correction Type",t:"select",o:["Missed Check-in","Missed Check-out","Wrong Entry","On-site Duty"]},{k:"reason",l:"Reason",t:"textarea"}] },
    lunch:        { label: "Lunch Order",      icon: "🍽", color: "#FB7185", fields: [{ k:"date",l:"Date",t:"date"},{k:"meal",l:"Meal Preference",t:"select",o:["Standard","Vegetarian","Diet","No Meal"]},{k:"notes",l:"Notes",t:"textarea"}] },
    id_card:      { label: "ID Card",          icon: "🪪", color: "#FACC15", fields: [{ k:"type",l:"Request Type",t:"select",o:["New Issuance","Re-issuance (Lost)","Re-issuance (Damaged)","Name/Photo Update"]},{k:"reason",l:"Reason",t:"textarea"}] },
    referral:     { label: "Referral",         icon: "🔗", color: "#C084FC", fields: [{ k:"candidate",l:"Candidate Name",t:"text"},{k:"position",l:"Position",t:"text"},{k:"resume",l:"Resume Link",t:"text"},{k:"relation",l:"Relationship",t:"textarea"}] },
  };

  // ── Status Definitions ───────────────────────────────────
  const STATUS = {
    submitted:     { label: "Submitted",       desc: "Awaiting department head review",            bg: "rgba(251,191,36,.12)", color: "#FBBF24", step: 1 },
    dept_approved: { label: "Dept. Approved",  desc: "Forwarded to People & Culture for final approval", bg: "rgba(96,165,250,.12)",  color: "#60A5FA", step: 2 },
    dept_rejected: { label: "Returned",        desc: "Returned by department head",                bg: "rgba(248,113,113,.12)", color: "#F87171", step: -1 },
    pc_approved:   { label: "Approved",        desc: "Final approval granted by People & Culture", bg: "rgba(52,211,153,.12)",  color: "#34D399", step: 3 },
    pc_rejected:   { label: "Escalated Back",  desc: "Returned by People & Culture to dept head",  bg: "rgba(248,113,113,.12)", color: "#F87171", step: -2 },
  };

  // ── Requests (30 items) ──────────────────────────────────
  let requests = [
    // ═══ TECHNOLOGY (8 requests — Tanvir is demo employee) ═══
    { id:1, module:"leave", requester:"tanvir", status:"pc_approved", createdDate:"2026-03-20",
      data:{ type:"Sick", from:"2026-03-21", to:"2026-03-22", reason:"High fever and body ache" },
      audit:[
        { action:"submitted", by:"tanvir", date:"2026-03-20 09:15", comment:"" },
        { action:"dept_approved", by:"rashid", date:"2026-03-20 11:30", comment:"Approved. Get well soon, Tanvir." },
        { action:"pc_approved", by:"nadia", date:"2026-03-21 09:00", comment:"Processed. Sick leave debited from annual allowance (14 remaining)." }
      ]},
    { id:2, module:"wfh", requester:"tanvir", status:"dept_approved", createdDate:"2026-03-27",
      data:{ from:"2026-04-01", to:"2026-04-03", tasks:"API integration sprint — PaymentGateway v3 module" },
      audit:[
        { action:"submitted", by:"tanvir", date:"2026-03-27 10:00", comment:"" },
        { action:"dept_approved", by:"rashid", date:"2026-03-27 15:20", comment:"Approved. Ensure daily standup attendance via Teams." }
      ]},
    { id:3, module:"it_asset", requester:"tanvir", status:"submitted", createdDate:"2026-03-30",
      data:{ asset:"Monitor", reason:"Need a secondary 27\" monitor for dual-screen development — current single screen slows debugging workflow" },
      audit:[
        { action:"submitted", by:"tanvir", date:"2026-03-30 08:45", comment:"" }
      ]},
    { id:4, module:"expense", requester:"tanvir", status:"pc_approved", createdDate:"2026-03-15",
      data:{ amount:"8500", cat:"Meals", receipt:"RC-2026-0341", notes:"Team dinner after Sprint-40 release — 6 people at Dhaba, Gulshan" },
      audit:[
        { action:"submitted", by:"tanvir", date:"2026-03-15 17:30", comment:"" },
        { action:"dept_approved", by:"rashid", date:"2026-03-16 09:15", comment:"Approved. Valid team expense. Attach final receipt scan." },
        { action:"pc_approved", by:"nadia", date:"2026-03-17 10:00", comment:"Processed. Reimbursement will reflect in April payroll." }
      ]},
    { id:5, module:"attendance", requester:"tanvir", status:"dept_rejected", createdDate:"2026-03-28",
      data:{ date:"2026-03-27", type:"Missed Check-in", reason:"Badge reader at Gate B was not working — entered through reception" },
      audit:[
        { action:"submitted", by:"tanvir", date:"2026-03-28 09:00", comment:"" },
        { action:"dept_rejected", by:"rashid", date:"2026-03-28 11:45", comment:"Please attach the building security incident report for Gate B malfunction. Coordinate with Facilities and resubmit." }
      ]},
    { id:6, module:"training", requester:"tanvir", status:"submitted", createdDate:"2026-04-01",
      data:{ course:"React Advanced Patterns & Performance", provider:"Frontend Masters", cost:"12000", date:"2026-04-20" },
      audit:[
        { action:"submitted", by:"tanvir", date:"2026-04-01 10:30", comment:"" }
      ]},
    { id:7, module:"overtime", requester:"tanvir", status:"pc_approved", createdDate:"2026-03-18",
      data:{ date:"2026-03-17", hours:"4", project:"Hotfix — Payment reconciliation bug in production (JIRA-4892)" },
      audit:[
        { action:"submitted", by:"tanvir", date:"2026-03-18 09:00", comment:"" },
        { action:"dept_approved", by:"rashid", date:"2026-03-18 09:30", comment:"Confirmed. Critical production fix — overtime justified." },
        { action:"pc_approved", by:"nadia", date:"2026-03-18 14:00", comment:"Processed. 4 hours OT compensation approved for March payroll." }
      ]},
    { id:8, module:"wfh", requester:"sadia", status:"submitted", createdDate:"2026-03-31",
      data:{ from:"2026-04-02", to:"2026-04-02", tasks:"UI component library migration — styled-components to CSS modules" },
      audit:[
        { action:"submitted", by:"sadia", date:"2026-03-31 14:00", comment:"" }
      ]},
    { id:9, module:"overtime", requester:"sadia", status:"pc_approved", createdDate:"2026-03-22",
      data:{ date:"2026-03-21", hours:"3", project:"Sprint-41 close — frontend smoke testing and deployment" },
      audit:[
        { action:"submitted", by:"sadia", date:"2026-03-22 08:30", comment:"" },
        { action:"dept_approved", by:"rashid", date:"2026-03-22 10:00", comment:"Confirmed. Sprint delivery required extended hours." },
        { action:"pc_approved", by:"nadia", date:"2026-03-23 09:00", comment:"Processed. 3 hours OT added to March payroll." }
      ]},
    { id:10, module:"training", requester:"imran", status:"dept_approved", createdDate:"2026-03-25",
      data:{ course:"AWS Solutions Architect — Associate", provider:"Coursera (AWS Official)", cost:"15000", date:"2026-04-15" },
      audit:[
        { action:"submitted", by:"imran", date:"2026-03-25 11:00", comment:"" },
        { action:"dept_approved", by:"rashid", date:"2026-03-25 16:30", comment:"Strongly recommended. Aligns with our cloud migration roadmap for Q2. Company-sponsored." }
      ]},
    { id:11, module:"leave", requester:"zahid", status:"submitted", createdDate:"2026-03-29",
      data:{ type:"Casual", from:"2026-04-03", to:"2026-04-04", reason:"Family event — sister's wedding" },
      audit:[
        { action:"submitted", by:"zahid", date:"2026-03-29 16:00", comment:"" }
      ]},

    // ═══ MARKETING (4 requests) ═══
    { id:12, module:"leave", requester:"ritu", status:"pc_approved", createdDate:"2026-03-10",
      data:{ type:"Annual", from:"2026-03-17", to:"2026-03-21", reason:"Pre-planned annual vacation — Cox's Bazar" },
      audit:[
        { action:"submitted", by:"ritu", date:"2026-03-10 09:00", comment:"" },
        { action:"dept_approved", by:"karim", date:"2026-03-10 11:45", comment:"Approved. No campaign deadlines that week. Enjoy!" },
        { action:"pc_approved", by:"nadia", date:"2026-03-11 09:00", comment:"Processed. 5 days annual leave debited (9 remaining)." }
      ]},
    { id:13, module:"travel", requester:"ritu", status:"dept_approved", createdDate:"2026-03-28",
      data:{ dest:"Chittagong", dep:"2026-04-05", ret:"2026-04-07", purpose:"Regional Brand Summit — presenting Q1 content performance report" },
      audit:[
        { action:"submitted", by:"ritu", date:"2026-03-28 15:00", comment:"" },
        { action:"dept_approved", by:"karim", date:"2026-03-28 17:30", comment:"Approved. Book via corporate travel portal. Budget cap: BDT 35,000." }
      ]},
    { id:14, module:"expense", requester:"meher", status:"submitted", createdDate:"2026-03-30",
      data:{ amount:"45000", cat:"Supplies", receipt:"RC-2026-0412", notes:"Professional camera lens rental — 2-week product shoot for Q2 campaign" },
      audit:[
        { action:"submitted", by:"meher", date:"2026-03-30 11:00", comment:"" }
      ]},
    { id:15, module:"lunch", requester:"meher", status:"pc_approved", createdDate:"2026-03-22",
      data:{ date:"2026-03-22", meal:"Standard", notes:"Team lunch — celebrating Q1 campaign launch milestone (8 people)" },
      audit:[
        { action:"submitted", by:"meher", date:"2026-03-22 10:00", comment:"" },
        { action:"dept_approved", by:"karim", date:"2026-03-22 10:30", comment:"Approved. Well deserved!" },
        { action:"pc_approved", by:"nadia", date:"2026-03-22 14:00", comment:"Team celebration approved. Within monthly event budget." }
      ]},

    // ═══ PAYMENTS & TREASURY (3 requests) ═══
    { id:16, module:"expense", requester:"priya", status:"pc_approved", createdDate:"2026-03-18",
      data:{ amount:"22000", cat:"Travel", receipt:"RC-2026-0298", notes:"Dhaka–Chittagong round trip for Q1 payment gateway audit at partner bank" },
      audit:[
        { action:"submitted", by:"priya", date:"2026-03-18 08:00", comment:"" },
        { action:"dept_approved", by:"farhana", date:"2026-03-18 10:30", comment:"Approved. Standard audit travel — within budget." },
        { action:"pc_approved", by:"nadia", date:"2026-03-19 09:00", comment:"Processed. Reimbursement scheduled for March cycle." }
      ]},
    { id:17, module:"salary_cert", requester:"priya", status:"dept_approved", createdDate:"2026-03-28",
      data:{ purpose:"Bank Loan", addressed_to:"HSBC Bangladesh — Gulshan Branch", notes:"Need within 3 business days for mortgage pre-approval deadline" },
      audit:[
        { action:"submitted", by:"priya", date:"2026-03-28 09:30", comment:"" },
        { action:"dept_approved", by:"farhana", date:"2026-03-28 11:00", comment:"Approved. Please prioritize — Priya has a bank deadline on April 2nd." }
      ]},
    { id:18, module:"insurance", requester:"ayesha", status:"pc_approved", createdDate:"2026-03-15",
      data:{ type:"Add Dependent", details:"Adding spouse — Irfan Siddiqui. Married on March 8, 2026. Marriage certificate attached." },
      audit:[
        { action:"submitted", by:"ayesha", date:"2026-03-15 10:00", comment:"" },
        { action:"dept_approved", by:"farhana", date:"2026-03-15 14:00", comment:"Verified marriage documentation. Approved." },
        { action:"pc_approved", by:"nadia", date:"2026-03-16 09:30", comment:"Dependent added to group insurance policy. Effective April 1, 2026." }
      ]},

    // ═══ OPERATIONS (3 requests) ═══
    { id:19, module:"manpower", requester:"kamal", status:"dept_approved", createdDate:"2026-03-25",
      data:{ role:"Warehouse Associate", dept:"Operations", count:"2", reason:"Increased order volume from Q2 projections — current team stretched thin during peak hours" },
      audit:[
        { action:"submitted", by:"kamal", date:"2026-03-25 11:00", comment:"" },
        { action:"dept_approved", by:"mahbub", date:"2026-03-26 09:30", comment:"Justified. Q2 projections show 40% volume increase. Please post via internal recruitment first." }
      ]},
    { id:20, module:"it_asset", requester:"kamal", status:"pc_rejected", createdDate:"2026-03-20",
      data:{ asset:"Laptop", reason:"Current ThinkPad L14 showing performance issues — slow boot and frequent freezing during inventory management software" },
      audit:[
        { action:"submitted", by:"kamal", date:"2026-03-20 10:00", comment:"" },
        { action:"dept_approved", by:"mahbub", date:"2026-03-20 14:00", comment:"Asset is 18 months old but noticeably degraded. Support Kamal's request." },
        { action:"pc_rejected", by:"nadia", date:"2026-03-21 10:30", comment:"Current asset is under the 3-year replacement cycle per IT Asset Policy (Section 4.2). Please submit a waiver form with IT diagnostics report if performance is critically impaired." }
      ]},
    { id:21, module:"overtime", requester:"tasnim", status:"submitted", createdDate:"2026-03-31",
      data:{ date:"2026-03-30", hours:"3", project:"Quarter-end operational metrics compilation and board report preparation" },
      audit:[
        { action:"submitted", by:"tasnim", date:"2026-03-31 09:00", comment:"" }
      ]},

    // ═══ CLIENT EXPERIENCE (2 requests) ═══
    { id:22, module:"training", requester:"rifat", status:"dept_approved", createdDate:"2026-03-26",
      data:{ course:"Advanced Customer Success Management", provider:"Gainsight Academy", cost:"18000", date:"2026-04-10" },
      audit:[
        { action:"submitted", by:"rifat", date:"2026-03-26 10:00", comment:"" },
        { action:"dept_approved", by:"samira", date:"2026-03-26 14:30", comment:"Excellent initiative. This certification will strengthen our CS team capabilities." }
      ]},
    { id:23, module:"wfh", requester:"naima", status:"pc_approved", createdDate:"2026-03-19",
      data:{ from:"2026-03-24", to:"2026-03-25", tasks:"Ticket backlog triage — 47 pending escalations from APAC region" },
      audit:[
        { action:"submitted", by:"naima", date:"2026-03-19 11:00", comment:"" },
        { action:"dept_approved", by:"samira", date:"2026-03-19 13:00", comment:"Approved. Focus environment will help clear the backlog." },
        { action:"pc_approved", by:"nadia", date:"2026-03-20 09:00", comment:"Processed." }
      ]},

    // ═══ TRADING & RISK (2 requests) ═══
    { id:24, module:"leave", requester:"rahim", status:"dept_rejected", createdDate:"2026-03-28",
      data:{ type:"Casual", from:"2026-04-01", to:"2026-04-02", reason:"Personal errands" },
      audit:[
        { action:"submitted", by:"rahim", date:"2026-03-28 16:00", comment:"" },
        { action:"dept_rejected", by:"jamal", date:"2026-03-28 17:15", comment:"Sorry Rahim — Q1 risk assessment closing week. All risk analysts needed for portfolio review. Please resubmit after April 5th." }
      ]},
    { id:25, module:"travel", requester:"shirin", status:"pc_approved", createdDate:"2026-03-15",
      data:{ dest:"Singapore", dep:"2026-03-20", ret:"2026-03-23", purpose:"MetaTrader 5 Operations Summit — broker technology partnerships" },
      audit:[
        { action:"submitted", by:"shirin", date:"2026-03-15 09:00", comment:"" },
        { action:"dept_approved", by:"jamal", date:"2026-03-15 10:30", comment:"Critical industry event. Approved — coordinate with Marketing for brand materials." },
        { action:"pc_approved", by:"nadia", date:"2026-03-16 09:00", comment:"International travel processed. Forex allowance: USD 800. Travel insurance activated." }
      ]},

    // ═══ FINANCE & AUDIT (2 requests) ═══
    { id:26, module:"overtime", requester:"arif", status:"pc_approved", createdDate:"2026-03-25",
      data:{ date:"2026-03-24", hours:"5", project:"Q1 statutory audit preparation — consolidation of inter-company transactions" },
      audit:[
        { action:"submitted", by:"arif", date:"2026-03-25 08:30", comment:"" },
        { action:"dept_approved", by:"shaheen", date:"2026-03-25 09:00", comment:"Quarter-end audit requires extended hours. Approved." },
        { action:"pc_approved", by:"nadia", date:"2026-03-25 14:00", comment:"5 hours OT processed for March payroll." }
      ]},
    { id:27, module:"loan", requester:"arif", status:"submitted", createdDate:"2026-03-30",
      data:{ amount:"60000", months:"4", reason:"Apartment security deposit — relocating closer to office for audit season accessibility" },
      audit:[
        { action:"submitted", by:"arif", date:"2026-03-30 14:00", comment:"" }
      ]},

    // ═══ PRODUCT & BI (1 request) ═══
    { id:28, module:"wfh", requester:"sumaiya", status:"dept_approved", createdDate:"2026-03-29",
      data:{ from:"2026-04-01", to:"2026-04-04", tasks:"Q1 Business Intelligence report — deep-dive analysis requires uninterrupted focus" },
      audit:[
        { action:"submitted", by:"sumaiya", date:"2026-03-29 10:00", comment:"" },
        { action:"dept_approved", by:"arman", date:"2026-03-29 11:30", comment:"Approved. Q1 BI report is board-critical. Deliver by April 4 EOD." }
      ]},

    // ═══ ADMIN & COMPLIANCE (1 request) ═══
    { id:29, module:"id_card", requester:"lubna", status:"submitted", createdDate:"2026-03-29",
      data:{ type:"Name/Photo Update", reason:"Legal name change after marriage — updated NID attached for verification" },
      audit:[
        { action:"submitted", by:"lubna", date:"2026-03-29 10:00", comment:"" }
      ]},

    // ═══ COMMUNITY & PARTNERS (1 request) ═══
    { id:30, module:"travel", requester:"rakib", status:"dept_approved", createdDate:"2026-03-27",
      data:{ dest:"Dubai", dep:"2026-04-08", ret:"2026-04-11", purpose:"iFX EXPO — partner booth coordination and IB relationship development" },
      audit:[
        { action:"submitted", by:"rakib", date:"2026-03-27 09:00", comment:"" },
        { action:"dept_approved", by:"nabila", date:"2026-03-27 11:00", comment:"Key expo for partner acquisition. Approved — align with Trading team on shared booth logistics." }
      ]},
  ];

  // ── Utility Functions ────────────────────────────────────

  function initials(name) {
    return name.split(' ').map(w => w[0]).join('').toUpperCase();
  }

  function fmtDate(d) {
    if (!d) return '—';
    const dt = new Date(d.replace(' ', 'T'));
    return dt.toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' });
  }

  function fmtDateTime(d) {
    if (!d) return '—';
    const dt = new Date(d.replace(' ', 'T'));
    return dt.toLocaleDateString('en-GB', { day:'numeric', month:'short' }) + ' · ' +
           dt.toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit' });
  }

  function timeAgo(d) {
    const now = new Date('2026-04-01T12:00:00');
    const then = new Date(d.replace(' ', 'T'));
    const diff = Math.floor((now - then) / 86400000);
    if (diff <= 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    if (diff < 7) return diff + ' days ago';
    if (diff < 30) return Math.floor(diff / 7) + 'w ago';
    return Math.floor(diff / 30) + 'mo ago';
  }

  function badge(status) {
    const s = STATUS[status];
    if (!s) return '';
    return `<span class="nv-badge" style="background:${s.bg};color:${s.color}"><span class="nv-badge-dot" style="background:${s.color}"></span>${s.label}</span>`;
  }

  function pipelineHTML(req) {
    const steps = [
      { label: 'Submitted', key: 'submitted' },
      { label: 'Dept. Head', key: 'dept_approved' },
      { label: 'People & Culture', key: 'pc_approved' },
      { label: 'Completed', key: 'done' }
    ];
    const st = req.status;
    let activeStep = 0;
    if (st === 'submitted') activeStep = 0;
    else if (st === 'dept_approved') activeStep = 1;
    else if (st === 'dept_rejected') activeStep = 1;
    else if (st === 'pc_approved') activeStep = 3;
    else if (st === 'pc_rejected') activeStep = 2;

    const isRejected = st === 'dept_rejected' || st === 'pc_rejected';
    const rejectedStep = st === 'dept_rejected' ? 1 : st === 'pc_rejected' ? 2 : -1;

    let html = '<div class="nv-pipeline">';
    steps.forEach((s, i) => {
      const done = (st === 'pc_approved' && i <= 3) || (!isRejected && i <= activeStep) || (isRejected && i < rejectedStep);
      const rejected = i === rejectedStep;
      const current = !isRejected && i === activeStep + 1 && st !== 'pc_approved';
      const cls = rejected ? 'rejected' : done ? 'done' : current ? 'current' : 'pending';
      const matchActions = { 'submitted':'submitted', 'dept_approved':'dept_approved', 'pc_approved':'pc_approved', 'done':'pc_approved' };
      const auditEntry = req.audit.find(a => a.action === matchActions[s.key]);
      const who = auditEntry ? (USERS[auditEntry.by]?.name.split(' ')[0] || '') : '';
      const when = auditEntry ? fmtDate(auditEntry.date) : '';

      html += `<div class="nv-pipeline-step ${cls}">
        <div class="nv-pipeline-dot">${rejected ? '✗' : done ? '✓' : current ? '⏳' : (i+1)}</div>
        ${i < steps.length - 1 ? '<div class="nv-pipeline-line"></div>' : ''}
        <div class="nv-pipeline-label">${s.label}</div>
        ${who ? `<div class="nv-pipeline-who">${who} · ${when}</div>` : ''}
      </div>`;
    });
    html += '</div>';
    return html;
  }

  function auditHTML(req) {
    const actionLabels = {
      submitted: 'Submitted request',
      dept_approved: 'Approved by department head',
      dept_rejected: 'Returned by department head',
      pc_approved: 'Final approval — People & Culture',
      pc_rejected: 'Returned by People & Culture'
    };
    const actionColors = {
      submitted: '#FBBF24',
      dept_approved: '#60A5FA',
      dept_rejected: '#F87171',
      pc_approved: '#34D399',
      pc_rejected: '#F87171'
    };
    let html = '<div class="nv-audit">';
    req.audit.forEach((a, i) => {
      const user = USERS[a.by];
      const isLast = i === req.audit.length - 1;
      html += `<div class="nv-audit-item">
        <div class="nv-audit-track">
          <div class="nv-audit-dot" style="background:${actionColors[a.action]}"></div>
          ${!isLast ? '<div class="nv-audit-line"></div>' : ''}
        </div>
        <div class="nv-audit-content">
          <div class="nv-audit-action">${actionLabels[a.action] || a.action}</div>
          <div class="nv-audit-meta">${user?.name || a.by} · ${user?.title || ''} · ${fmtDateTime(a.date)}</div>
          ${a.comment ? `<div class="nv-audit-comment">"${a.comment}"</div>` : ''}
        </div>
      </div>`;
    });
    html += '</div>';
    return html;
  }

  // ── Query Helpers ────────────────────────────────────────

  function requestsByUser(userId) {
    return requests.filter(r => r.requester === userId);
  }

  function requestsByDept(deptKey) {
    const deptUsers = Object.keys(USERS).filter(k => USERS[k].dept === deptKey);
    return requests.filter(r => deptUsers.includes(r.requester));
  }

  function pendingForDept(deptKey) {
    return requestsByDept(deptKey).filter(r => r.status === 'submitted');
  }

  function pendingForPC() {
    return requests.filter(r => r.status === 'dept_approved');
  }

  function deptEmployees(deptKey) {
    return Object.entries(USERS).filter(([k, u]) => u.dept === deptKey && u.role === 'employee').map(([k, u]) => ({ key: k, ...u }));
  }

  // ── Toast ────────────────────────────────────────────────

  function toast(msg, ok = true) {
    let t = document.getElementById('nv-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'nv-toast';
      t.className = 'nv-toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.display = 'flex';
    t.style.background = ok ? '#052e16' : '#2d0707';
    t.style.border = `1px solid ${ok ? '#34D39940' : '#F8717140'}`;
    t.style.color = ok ? '#34D399' : '#F87171';
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => {
      t.classList.remove('show');
      setTimeout(() => t.style.display = 'none', 300);
    }, 3000);
  }

  // ── URL Params ───────────────────────────────────────────

  function getParam(key) {
    return new URLSearchParams(window.location.search).get(key);
  }

  return {
    DEPTS, USERS, MODS, STATUS, requests,
    getDeptHead, getDefaultEmployee, deptEmployees,
    initials, fmtDate, fmtDateTime, timeAgo, badge,
    pipelineHTML, auditHTML,
    requestsByUser, requestsByDept, pendingForDept, pendingForPC,
    toast, getParam
  };
})();
