import { barChart, book, exit, gift, help, lockClosed, mailUnread, newspaper, notifications, personAdd, save, scale, school, star, trendingUp } from "ionicons/icons";
import CSS from "csstype";

// Styles User
export const stylesUser: { [key: string]: CSS.Properties } = {
    sectionHeader: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "0.8em",
      marginLeft: "18px",
      color: "#212f3d",
    },
    list: {
      border: "1px solid red",
      borderRadius: "10px",
    },
    avatar: {
      width: "30px",
      height: "30px",
      overflow: "hidden",
      borderRadius: "3px",
    },
    label: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    itemText: {
      fontSize: "0.8em",
      fontWeight: "bold",
      color: "#212f3d",
    },
  };



//  Data User
export const accountItems = [
    { icon: trendingUp, text: "Margin Trading" },
    { icon: barChart, text: "Realize Profit/Loss" },
  ];
  
  export const promoItems = [
    { icon: personAdd, text: "Ajak Teman" },
    { icon: gift, text: "Hadiah" },
  ];
  
  export const investmentItems = [
    { icon: book, text: "Kamus Investasi" },
    { icon: school, text: "Belajar Investasi" },
  ];
  
  export const settingsItems = [
    { icon: lockClosed, text: "Keamanan Akun" },
    { icon: notifications, text: "Notifikasi" },
    { icon: newspaper, text: "Tampilkan Konfirmasi Transaksi" },
  ];
  
  export const supportItems = [
    { icon: help, text: "Bantuan" },
    { icon: mailUnread, text: "Kotak Saran" },
    { icon: star, text: "Nilai Kami" },
  ];
  
  export const appItems = [
    { icon: save, text: "Legal" },
    { icon: scale, text: "Versi" },
  ];

  export const exitItems = [
    { icon: exit, text: "Keluar" },
  ];

