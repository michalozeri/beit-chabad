import { Paper } from "@mui/material";


export function DonatorPrev({donator}) {

  return (
      <section>
     {donator && 
    <Paper style={{margin:"auto", border: "none", backgroundColor:"transparent"}}>
        <div style={{textAlign: "center", fontSize:"2rem"}}>
          <p style={{fontSize: "15rem"}}>{donator.fullname}</p>
          <p style={{fontSize: "6rem"}}>{donator.txt1}</p>
        </div>
    </Paper>  }
    </section>
  )
}
