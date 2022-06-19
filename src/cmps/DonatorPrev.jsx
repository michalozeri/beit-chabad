import { Paper } from "@mui/material";


export function DonatorPrev({donator}) {

  return (
      <section>
    <Paper style={{margin:"auto", border: "none", backgroundColor:"transparent",height:"61vh"}}>
        <div style={{fontSize: "2.3rem", width: "65vw", textAlign: "center", margin: "auto"}}>
          <p >{donator?.txt1}</p>
          <p style={{marginTop: "2%", fontWeight: "bold"}}>{donator.txt2}</p>
        </div>
    </Paper>  
    </section>
  )
}
