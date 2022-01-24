import {Grid, Typography} from "@mui/material";
import {styled} from "@mui/system";

const CustomFooter = styled(Grid)(({theme}) => ({
    padding: "2rem 0",
    borderTop: "1px solid #eaeaea",
}));


const Footer = () => {
    return (
        <CustomFooter container>
          <Grid item xs={12} md={6}>
              <Typography align="center">
                  Copyright © 2019 PlazaThemes. All Rights Reserved.
              </Typography>
          </Grid>
            <Grid item xs={12} md={6}>
                <Typography align="center">
                    전라남도 영암군 학산면 금계로 133-25
                </Typography>
            </Grid>
        </CustomFooter>
/*        <CustomFooter>
            <Typography>
                Copyright © 2019 PlazaThemes. All Rights Reserved.
            </Typography>
            <Typography>
                전라남도 영암군 학산면 금계로 133-25
            </Typography>
        </CustomFooter>*/

    );
};

export default Footer;