// Practice areas, in the order they appear on the site (also drives the prev/next links on each article).
export const practiceAreas = [
  {
    "slug": "corporate-law",
    "name": "Corporate Law",
    "menu": "Corporate law",
    "summary": "Guidance on business formation, contracts, compliance and commercial transactions.",
    "title": "Corporate Law in Kenya | T.N Ogwoka & Osili Advocates",
    "heading": "Corporate Law in Kenya: What It Is and How Lawyers Handle Corporate Legal Matters",
    "component": "CorporateLaw"
  },
  {
    "slug": "family-law",
    "name": "Family Law",
    "menu": "Family law",
    "summary": "Compassionate counsel on divorce, custody, support and family agreements.",
    "title": "Family Law in Kenya | T.N Ogwoka & Osili Advocates",
    "heading": "Family Law in Kenya: What It Is and How Lawyers Handle Family Legal Matters",
    "component": "FamilyLaw"
  },
  {
    "slug": "criminal-defense",
    "name": "Criminal Defense",
    "menu": "Criminal defense",
    "summary": "Strong, strategic defense at every stage, from investigation through trial.",
    "title": "Criminal Defence in Kenya | T.N Ogwoka & Osili Advocates",
    "heading": "Criminal Defence in Kenya: What It Is and How Lawyers Handle Criminal Cases",
    "component": "CriminalDefense"
  },
  {
    "slug": "real-estate-law",
    "name": "Real Estate Law",
    "menu": "Real estate law",
    "summary": "Help with property purchases, leases, title issues and real estate disputes.",
    "title": "Real Estate Law in Kenya | T.N Ogwoka & Osili Advocates",
    "heading": "Real Estate Law in Kenya: What It Is and How Lawyers Handle Property Legal Matters",
    "component": "RealEstateLaw"
  },
  {
    "slug": "immigration-law",
    "name": "Immigration Law",
    "menu": "Immigration law",
    "summary": "Support with visas, residency, citizenship and immigration case filings.",
    "title": "Immigration Law in Kenya | T.N Ogwoka & Osili Advocates",
    "heading": "Immigration Law in Kenya: What It Is and How Lawyers Handle Immigration Legal Matters",
    "component": "ImmigrationLaw"
  },
  {
    "slug": "employment-law",
    "name": "Employment Law",
    "menu": "Employment law",
    "summary": "Advice on workplace rights, contracts, discrimination and wrongful termination.",
    "title": "Employment Law in Kenya | T.N Ogwoka & Osili Advocates",
    "heading": "Employment Law in Kenya: What It Is and How Lawyers Handle Employment Legal Matters",
    "component": "EmploymentLaw"
  }
]

export const getArea = (slug) => practiceAreas.find((a) => a.slug === slug)
