import {Container, CssBaseline, ThemeProvider, Typography} from "@mui/material";
import {customTheme} from "./theme";
import Head from "next/head";
import Header from "./Header";
import {styled} from "@mui/system";

const CustomContainer = styled(Container)(({ theme }) => ({
    minHeight: "100vh",
    padding: "4rem 0",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}));

const CustomFooter = styled('footer')(({theme}) => ({
    display: "flex",
    flex: 1,
    padding: "2rem 0",
    borderTop: "1px solid #eaeaea",
    justifyContent: "center",
    alignItems: "center"
}));

function Layout(props) {

    const {title,description, children} = props;

    return (
        <div>
            <Head>
                <title>{title ? `${title} - Next Amazona` : `Next Amazona`}</title>
                {description && <meta name="description" content={description}/>}
            </Head>
            <ThemeProvider theme={customTheme}>
                <CssBaseline/>
                <Header/>
                <CustomContainer>
                    {children}
                </CustomContainer>
                <CustomFooter>
                    <Typography>
                        All rights reserved. Next Amazona.
                    </Typography>
                </CustomFooter>
            </ThemeProvider>
        </div>
    );
}

export default Layout;