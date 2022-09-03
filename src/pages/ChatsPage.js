import {Link} from "react-router-dom";
import React, {useEffect, useState, useRef} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {Typography} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: green[700]
        },
    },
});

function ChatsPage() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState([]);
    const ref = useRef(null);
    const [chatList] = useState([
        {name: 'All', id: '1'},
        {name: 'Unread', id: '2'},
        {name: 'Read', id: '3'},
        {name: 'Archive', id: '4'},
        {name: 'Spam', id: '5'}
    ]);

    const onButtonClick = () => {
        let newId = 1;
        if (messageList.length > 0) {
            newId = messageList[messageList.length - 1].id + 1;
        }
        if  (name.length > 0) {
            setMessageList(messageList => [...messageList, {message: message, name: name, id: newId}]);
        } else {
            alert("Name needed");
        }
    }

    useEffect( () => {
        if (messageList.length > 0) {
            setTimeout(() => {
                alert(name + ", your message had been successfully sent")
            }, 1500);
        };
        if (ref.current) {
            ref.current.focus();
        }
    }, [messageList, name]);

    return (
        <ThemeProvider theme={theme}>
            <div className='navpartheader'>
                <Link className='navpartheadera' to={'/'}>Home</Link>
                <Link className='navpartheadera' to={'/chats'}>Chats</Link>
                <Link className='navpartheadera' to={'/profile'}>Profile</Link>
            </div>
            <div className="app">
                <div className="chat">
                    <List sx={{marginRight: '20px', width: '300px'}}>
                        {chatList.map((item) =>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemAvatar><Avatar><FolderIcon /></Avatar></ListItemAvatar>
                                    <ListItemText sx={{fontSize: "small"}} primary = {item.name} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                </div>
                <div className="messages">
                    <Box component="form" noValidate
                         autoComplete="off"  width="300px" display="flex"
                         marginTop='20px'
                         flexDirection="column">
                        <TextField id="name" label="Name"
                                   InputProps={{ style: { fontSize: "small"} }}
                                   InputLabelProps={{ style: { fontSize: "small" } }}
                                   variant="outlined" sx={{ mb: 2}}
                                   value={name}
                                   inputRef={ref}
                                   onChange = {(e) => setName(e.target.value)}/>
                        <TextField id="message" label="Message"
                                   InputProps={{ style: { fontSize: "small"} }}
                                   InputLabelProps={{ style: { fontSize: "small" } }}
                                   variant="outlined" sx={{ mb: 2 }}
                                   value={message}
                                   onChange = {(e) => setMessage(e.target.value)}/>
                        <Button variant="outlined" color='primary'
                                size="small" onClick={onButtonClick} sx={{ mb: 2 }}>Send</Button>
                    </Box>
                    {
                        messageList.map(item => {
                            return (
                                <div className='message-text'>
                                    <Typography variant='h9' component='div' color='primary'>{item.name}</Typography>
                                    <Typography variant='body2'>{item.message}</Typography>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </ThemeProvider>
    );
}

export default ChatsPage;