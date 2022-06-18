import { Paper } from "@mui/material";


export function DonatorPrev({donator}) {

  return (
      <section>
    <Paper style={{margin:"auto", border: "none", backgroundColor:"transparent",height:"70vh"}}>
        <div style={{}}>
          <p style={{fontSize: "8rem", marginBottom:"5%"}}>{donator?.fullname}</p>
          <p style={{fontSize: "2.5rem", width: "75vw", textAlign: "center", margin: "auto"}}>{donator?.txt}</p>
        </div>
    </Paper>  
    </section>
  )
}
