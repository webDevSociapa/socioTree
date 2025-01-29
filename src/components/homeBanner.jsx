import { Box, Paper, Typography } from "@mui/material";

const HomeBanner = () => {
    return (
     <Box sx={{bgcolor:"#222222"}}>
       <div style={{display:"flex"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
        <Typography variant="h3">
        Everything you are. In one, simple link in bio.
        </Typography>
        <Typography variant="h6">
        Join 30M+ people using Sociotree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
        </Typography>
        </div>
       </div>
     </Box>
    )
}

export default HomeBanner;