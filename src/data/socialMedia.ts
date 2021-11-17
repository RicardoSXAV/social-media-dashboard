import {
  facebookIcon,
  instagramIcon,
  twitterIcon,
  youtubeIcon,
} from "../assets";
import { COLORS } from "../constants/colors";

export const socialMediaList = [
  {
    icon: facebookIcon,
    color: COLORS.facebook,
    displayName: "@nathanf",
    amountName: "followers",
    totalAmount: "1987",
    amountDayBalance: 12,
  },
  {
    icon: twitterIcon,
    color: COLORS.twitter,
    displayName: "@nathanf",
    amountName: "followers",
    totalAmount: "1044",
    amountDayBalance: 99,
  },
  {
    icon: instagramIcon,
    color: COLORS.instagram,
    displayName: "@realnathanf",
    amountName: "followers",
    totalAmount: "11k",
    amountDayBalance: 1099,
  },
  {
    icon: youtubeIcon,
    color: COLORS.youtube,
    displayName: "Nathan F.",
    amountName: "subscribers",
    totalAmount: "8239",
    amountDayBalance: -144,
  },
];

export const informationList = [
  {
    name: "Page Views",
    icon: facebookIcon,
    amount: "87",
    balance: 3,
  },
  {
    name: "Likes",
    icon: facebookIcon,
    amount: "52",
    balance: -2,
  },
  {
    name: "Likes",
    icon: instagramIcon,
    amount: "5462",
    balance: 2257,
  },
  {
    name: "Profile Views",
    icon: instagramIcon,
    amount: "52k",
    balance: 1375,
  },
  {
    name: "Retweets",
    icon: twitterIcon,
    amount: "117",
    balance: 303,
  },
  {
    name: "Likes",
    icon: twitterIcon,
    amount: "507",
    balance: 553,
  },
  {
    name: "Likes",
    icon: youtubeIcon,
    amount: "107",
    balance: -19,
  },
  {
    name: "Total Views",
    icon: youtubeIcon,
    amount: "1407",
    balance: -12,
  },
];
