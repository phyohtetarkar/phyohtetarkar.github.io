import { Certificate, Experience, Project, Skill } from "./data.types";

export const projects = [
  {
    title: "Universe Online Shop",
    about: "Online store e-commerce application for educational products.",
    links: [
      {
        type: "Website",
        url: "https://www.universe4kids.com"
      },
      {
        type: "iOS",
        url: "https://apps.apple.com/us/app/universe-online-shop/id1614268603"
      },
      {
        type: "Android",
        url: "https://play.google.com/store/apps/details?id=com.universe4kids.ecommerce"
      }
    ]
  },
  {
    title: "Shalpay",
    about:
      "Shal Pay is a simple and powerful payment system. It can top-up for all telecom operators in Myanmar. Buying Data Packs, Gift Cards, EPins and Games can buy easily with Shal Pay. It also brings the convenient way to pay the various bills to users. Just a little simple step, payments can do easily and safely.",
    links: [
      {
        type: "iOS",
        url: "https://apps.apple.com/us/app/shalpay-2-0/id1570786574"
      }
    ]
  },
  {
    title: "Myanmar Labour News",
    about: "News media web and mobile application.",
    links: [
      {
        type: "Website",
        url: "https://www.myanmarlabournews.com"
      },
      {
        type: "Android",
        url: "https://play.google.com/store/apps/details?id=com.mmlabour.news"
      }
    ]
  },
  {
    title: "Wallet Ledger",
    about: "Wallet Ledger is a free income expense managing mobile app.",
    links: [
      {
        type: "iOS",
        url: "https://apps.apple.com/us/app/wallet-ledger/id1467630481"
      },
      {
        type: "Android",
        url: "https://play.google.com/store/apps/details?id=com.phyohtet.ledger"
      }
    ]
  },
  {
    title: "Latte POS",
    about:
      "Latte POS is a free, simple and ease of use point of sale application that helps you to sell anywhere.",
    links: [
      {
        type: "iOS",
        url: "https://apps.apple.com/us/app/latte-pos/id1546856504"
      },
      {
        type: "Android",
        url: "https://play.google.com/store/apps/details?id=com.phyohtet.latte_pos"
      }
    ]
  },
  {
    title: "2048 Game",
    about: "2048 game build with flutter.",
    links: [
      {
        type: "Github",
        url: "https://github.com/phyohtetarkar/flutter-practice/tree/master/game_2048_flutter"
      }
    ]
  }
] as Project[];

export const certificates = [
  {
    title: "Serverless",
    url: "https://www.credly.com/badges/f78cd3fe-1266-4fbd-a687-fbee1920ddd5/public_url",
    image: "/images/aws-learning-serverless.png"
  },
  {
    title: "Kotlin for java Developers",
    url: "https://www.coursera.org/account/accomplishments/verify/SKAX255T8V48",
    image: "/images/coursera.png"
  },
  {
    title: "Essentail Math for Machine Learning: Python Edition",
    url: "https://courses.edx.org/certificates/1891b09d5d12441cacc3b849e3a3447a",
    image: "/images/edx.png"
  },
  {
    title: "Build a Modern Computer form First Principals: From Nand to Tetris",
    url: "https://www.coursera.org/account/accomplishments/verify/5PBM6CN43S8Q",
    image: "/images/coursera.png"
  }
] as Certificate[];

export const skills = [
  {
    title: "Java EE / Spring",
    percentage: 90
  },
  {
    title: "Native Android & iOS Development",
    percentage: 90
  },
  {
    title: "ReactJS Development",
    percentage: 90
  },
  {
    title: "React Native Development",
    percentage: 90
  },
  {
    title: "Flutter Development",
    percentage: 90
  },
  {
    title: "Java",
    percentage: 90
  },
  {
    title: "Kotlin",
    percentage: 90
  },
  {
    title: "Swift",
    percentage: 85
  },
  {
    title: "Javascript / Typescript",
    percentage: 90
  }
] as Skill[];

export const experiences = [
  {
    title: "Senior iOS Developer",
    company: "Advent Soft (2020)",
    responsibilities: ["Build, design and develop iOS applications"]
  },
  {
    title: "Senior Software Developer",
    company: "Operating Partners Myanmar (2016 - 2020)",
    responsibilities: [
      "Lead and train mobile development",
      "Build, design and develop Java EE application",
      "Solving and guide to fix complex technical problems"
    ]
  }
] as Experience[];
