import { Paper } from "@mui/material";


export function DonatorPrev({donator}) {

  return (
      <section>
    <Paper style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center",margin:"auto", border: "none", backgroundColor:"transparent",height:"70vh"}}>
        <div style={{fontSize: donator.isTooLong? "2.5rem": "4rem", width: "65vw", textAlign: "center", margin: "auto"}}>
          <p >{donator?.txt1}</p>
          <p >{donator?.txt11}</p>
          <p style={{marginTop: donator.txt1? "2%": "0", fontWeight: "bold", fontSize: donator.isTooLong? "2rem": donator.txt1? "3.2rem": "4rem"}}>{donator.txt2}</p>
        </div>
    </Paper>  
    </section>
  )
}
