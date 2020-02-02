import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },

    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
    },
    seperator: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        boxShadow: 'none',
        border: theme.spacing(0),
        WebkitBoxShadow: 'none',
        outline: 'none',
    },
    card: {
        maxWidth: '100%',
        boxShadow: 0,
        border: theme.spacing(0),
        WebkitBoxShadow: 'none',
        outline: 'none',
        padding: theme.spacing(1, 1, 4, 1),
    },
    media: {
        height: '60vh',
    },
}));

export default function AddressForm() {

    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <div className={classes.card} border={0} m={2} p={2}>
                    <Paper className={classes.paper}>

                        <Typography variant="h6" align='center'>
                            ပညာရေးဝန်ကြီး၎ာန
                    </Typography>
                        <Typography variant="h6" align='center'>
                            အဆင့်မြင့်ပညာဦးစီး၎ာနန
                    </Typography>
                        <Typography variant="h6" align='center'>
                            နည်းပညာတက္ကသိုလ်(မော်လမြိုင်)
                    </Typography>
                        <Typography variant="h6" align='center'>
                            ကျောင်းသားမှတ်ပုံတင်
                    </Typography>
                        <Grid container spacing={1}>

                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="myanmarname"
                                    name="myanmarname"
                                    label="ကျောင်းသား/သူအမည်(မြန်မာ)"
                                    fullWidth
                                    autoComplete="myanmarname"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="englishname"
                                    name="englishname"
                                    label="ကျောင်းသား/သူအမည်(အဂ်လိပ်)"
                                    fullWidth
                                    autoComplete="englishname"
                                />
                            </Grid>


                            <Grid item xs={12} spacing={3}>
                                <TextField
                                    id="nrcno"
                                    name="nrcno"
                                    label="နိုင်ငံသားစိစစ်ရေးကတ်ပြားအမှတ်"
                                    fullWidth
                                    autoComplete="nrcno"
                                />
                            </Grid>
                            <Grid item xs={12} spacing={3}>
                                <TextField
                                    id="nrcno"
                                    name="nrcno"
                                    label="မွေးသက္ကရာဇ်"
                                    fullWidth
                                    autoComplete="nrcno"
                                />
                            </Grid>

                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="bloodtype"
                                    name="bloodtype"
                                    label="သွေးအုပ်စု"
                                    fullWidth
                                    autoComplete="blootype"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="height"
                                    name="height"
                                    label="အရပ်"
                                    fullWidth
                                    autoComplete="height"
                                />
                            </Grid>
                            <Grid item xs={12} spacing={3} display="block">
                                <TextField
                                    id="uniquemark"
                                    name="uniquemark"
                                    label="ကိုယ်တွင်ထင်ရှားသောအမှတ်သား"
                                    fullWidth
                                    autoComplete="uniquemark"
                                />
                            </Grid>


                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="fathernamemyanmar"
                                    name="fathernamemyanmar"
                                    label="အဘအမည်(မြန်မာ)"
                                    fullWidth
                                    autoComplete="fathernamemyanmar"
                                />
                            </Grid>

                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="fathernameenglish"
                                    name="fathernameenglish"
                                    label="အဘအမည်(အဂ်လိပ်)"
                                    fullWidth
                                    autoComplete="fathernameenglish"
                                />
                            </Grid>

                            <Grid item xs={12} spacing={3}>
                                <TextField
                                    id="fathernrcno"
                                    name="fathernrcno"
                                    label="နိုင်ငံသားစိစစ်ရေးကတ်ပြားအမှတ်"
                                    fullWidth
                                    autoComplete="fathernrcno"
                                />
                            </Grid>

                            <Grid item xs={12} spacing={3}>
                                <TextField
                                    id="fathercareer"
                                    name="fathercareer"
                                    label="အလုပ်အကိုင်"
                                    fullWidth
                                    autoComplete="fathercareer"
                                />
                            </Grid>



                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="mothernamemyanmar"
                                    name="mothernamemyanmar"
                                    label="အမိအမည်(မြန်မာ)"
                                    fullWidth
                                    autoComplete="mothernamemyanmar"
                                />
                            </Grid>

                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="mothernameenglish"
                                    name="mothernameenglish"
                                    label="အမိအမည်(အဂ်လိပ်)"
                                    fullWidth
                                    autoComplete="mothernameenglish"
                                />
                            </Grid>

                            <Grid item xs={12} spacing={3}>
                                <TextField
                                    id="mothernrcno"
                                    name="mothernrcno"
                                    label="နိုင်ငံသားစိစစ်ရေးကတ်ပြားအမှတ်"
                                    fullWidth
                                    autoComplete="mothernrcno"
                                />
                            </Grid>

                            <Grid item xs={12} spacing={3}>
                                <TextField
                                    id="mothercareer"
                                    name="mothercareer"
                                    label="အလုပ်အကိုင်"
                                    fullWidth
                                    autoComplete="mothercareer"
                                />
                            </Grid>

                            <Grid item xs={12} spacing={3}>
                                <TextField
                                    id="currentcourse"
                                    name="courrentcourse"
                                    label="ယခုသင်တန်းနှစ်"
                                    fullWidth
                                    autoComplete="currentcourse"
                                />
                            </Grid>

                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="currentcoursename"
                                    name="currentcoursename"
                                    label="သင်တန်းအမည်"
                                    fullWidth
                                    autoComplete="currentcoursename"
                                />
                            </Grid>

                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="rollno"
                                    name="rollno"
                                    label="ခုံအမှတ်"
                                    fullWidth
                                    autoComplete="rollno"
                                />
                            </Grid>

                            <Grid item xs={12} spacing={3}>
                                <TextField
                                    id="previouscourserollno"
                                    name="previouscourserollno"
                                    label="ယခင်နှစ်သင်တန်းခုံအမှတ် "
                                    fullWidth
                                    autoComplete="previouscourserollno"
                                />
                            </Grid>

                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="highschoolrollno"
                                    name="highschoolrollno"
                                    label="အ‌ခြေခံပညာအထက်တန်းခုံအမှတ်"
                                    fullWidth
                                    autoComplete="highschoolrollno"
                                />
                            </Grid>

                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="highschoolyear"
                                    name="highschoolyear"
                                    label="အောင်မြင်သည့်ခုနှစ်"
                                    fullWidth
                                    autoComplete="highschoolyear"
                                />
                            </Grid>



                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="permanentaddress"
                                    name="permanentaddress"
                                    label="အမြဲတမ်းနေရပ်လိပ်စာအပြည့်အစုံ"
                                    fullWidth
                                    autoComplete="permanentaddress"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="permanentaddressphone"
                                    name="permanentaddressphone"
                                    label="အမြဲတမ်းနေရပ်လိပ်စာ(ဖုန်းနံပါတ်)"
                                    fullWidth
                                    autoComplete="permanentaddressphone"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="contactableaddress"
                                    name="contactableaddress"
                                    label="လွယ်ကူစွာဆက်သွယ်နိုင်သည့်လိပ်စာ"
                                    fullWidth
                                    autoComplete="contactableaddress"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="contactableaddressphone"
                                    name="contactableaddressphone"
                                    label="လွယ်ကူစွာဆက်သွယ်နိုင်သည့်လိပ်စာ(ဖုန်းနံပါတ်)"
                                    fullWidth
                                    autoComplete="contactableaddressphone"
                                />
                            </Grid>
                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="currentaddress"
                                    name="currentaddress"
                                    label="ယခုမော်လမြိုင်မြို့နေရပ်လိပ်စာ"
                                    fullWidth
                                    autoComplete="currentaddress"
                                />
                            </Grid>

                            <Grid item xs={12} md={6} spacing={3}>
                                <TextField
                                    id="currentaddressphone"
                                    name="currentaddressphone"
                                    label="ယခုမော်လမြိုင်မြို့နေရပ်လိပ်စာ(ဖုန်းနံပါတ်)"
                                    fullWidth
                                    autoComplete="currentaddressphone"
                                />
                            </Grid>

                            <Grid item xs={12} spacing={3} display="block">
                                <Paper className={classes.seperator}>

                                    <Typography>
                                        မှတ်ချက်။ &nbsp; &nbsp; &nbsp; အထက်ဖော်ပြပါ အချက်အလက်များအား ဘီအီးဘွဲ့လက်မှတ်များတွင် ရေးသွင်းရမည်ဖြစ်သဖြင့် မိမိအမည်၊ အဘအမည်နှင့် အမိအမည်တို့၏ အဂ်လိပ်၊  မြန်မာစာလုံးပေါင်းများအား သေချာ၊ ဂရုစိုက်၊ အတည်ပြု၍ ရေးသားကြပါရန်။
                                    </Typography>

                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </Container>
        </>
    );
}
