
export default {
  root: {
    backgroundColor: "yellowgreen",
    height:"100vh",
    display:"flex",
    alignItems:"flex-start",
    justifyContent:"center"
  },
  container: {
      width:"50%",
      display:"flex",
      alignItems:"flex-start",
      flexDirection:"column",
      flexWrap:"wrap"
  },
  nav: {
    display:"flex",
    width:"100%",
    justifyContent:"space-between",
    color:"#fff",
    "& h1":{
      color: "#000"
    }
  },
  palettesStyles: {
    boxSizing:"border-box",
    width:"100%",
    display:"grid",
    gridTemplateColumns:"repeat(3,30%)",
    gridGap:"5%"
  }
}
