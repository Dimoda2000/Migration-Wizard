import {Typography} from '@mui/material'

export const MuiTypography = () =>{
    return (
        <div>
            <Typography variant='h1'>h1 Heading</Typography>
            <Typography variant='h2'>h2 Heading</Typography>
            <Typography variant='h3'>h3 Heading</Typography>
            <Typography variant='h4' component='h1'gutterBottom>
                h4 Heading
            </Typography>
            <Typography variant='h5'>h5 Heading</Typography>
            <Typography variant='h6'>h6 Heading</Typography>

            <Typography variant='subtitle1'>Sub title 1</Typography>
            <Typography variant='subtitle1'>Sub title 1</Typography>

            <Typography variant='body1'>
                You don't need to learn and configure many build tools. 
                Instant reloads help you focus on development.
                </Typography>
            <Typography variant='body2'>
                Your app only needs one build dependency. We test Create 
                React App to make sure that all of its underlying pieces 
                work together seamlessly – no complicated version mismatches.
                </Typography>
        </div>
    )
}