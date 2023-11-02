import { BarChart, DeleteOutline, Favorite, FavoriteBorder, ModeCommentOutlined, MoreHoriz, Repeat, Share } from "@mui/icons-material"
import { Box, List, ListItemButton, Typography } from "@mui/material"
import { useAuthStore, useModal, useTweetActions, useUiStore } from "../hooks"
import { getTimeAgo } from "../helpers";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const Tweet = ({ tweet, user, tweetFilter}) => {
    const {
        _id :tweetID,
        likes: tweetLikes,
        retweets: tweetRetweets,
        text: tweetText,
        creationDate: tweetCreationDate,
        user: tweetUser,
        comments: tweetComments
    } = tweet

    const { user:activeUser, status } = useAuthStore();
    const { addLike, addRetweet, isLiked, isRetweeted, deleteTweet } = useTweetActions(tweetID, tweetUser._id, tweetLikes, tweetRetweets, activeUser);

    const [retwitted, setRetwitted] = useState('')
    const [retwittedBy, setRetwittedBy] = useState([])

    const ref = useRef();
    const { onClick, modal } = useModal(ref);

    const handleOnClickOptions = () => {
        if( activeUser._id !== tweetUser._id ){
            return
        }
        onClick();
    }

    const { openDeleteTweetModal } = useUiStore();

    useEffect(() => {
        if( status === 'authenticated' && tweetFilter === 'following' ){
            setRetwitted(!activeUser.following.find( _id => _id === tweetUser._id ));
            setRetwittedBy(tweetRetweets.filter(element => activeUser.following.includes(element._id)));
        }else if( status === 'authenticated' && tweetFilter === 'user' ){
            setRetwitted(tweetUser._id !== user._id);
            setRetwittedBy([]);
        }
    }, [])

    // Por si le quiero agregar que aparezcan lo que likeo tus seguidos.
    // const liked = !activeUser.following.find( _id => _id === user._id )
    // const likedBy =  likes.filter(user => activeUser.following.includes(user._id));


  return (
    <Box 
        display="flex"
        flexDirection="column"
        px={2} py="8px"
        borderBottom="0.5px rgb(238, 238, 238) solid"
        borderTop="0.5px rgb(238, 238, 238) solid"
        sx={{ 
            ':hover':{ bgcolor:'rgb(230, 230, 230)', transition:'.2s' },
            cursor:'pointer',
            transition:'.2s'
        }}
        >
        
        <Box 
            flexDirection="row" alignItems="center" 
            sx={{ ml:'28px', mb:'4px' }}
            display={ (retwitted) ? 'flex' : 'none' }
        >
            <Box display="flex" alignItems="center" justifyContent="center"><Repeat sx={{ fontSize:'15px', color:'text.light', mr:'10px' }}/></Box>
            <Typography sx={{ fontSize:'14px', color:'text.light', fontWeight:'bold' }}>{retwittedBy[0]?.name} Retweeted</Typography>
        </Box>

        
        <Box display="flex" flexDirection="row">

            <Box width="48px" mr="6px">
                <NavLink to={`/user/${tweetUser.username}`}>
                    <img className="tweet-img" src={tweetUser.profilePicture}/>
                </NavLink>
            </Box>

            <Box display="flex" flex={1} flexDirection="column">

                <Box display="flex" flexDirection="row" justifyContent="space-between">
                    <Box display="flex" flexDirection="row">
                        <NavLink to={`/user/${tweetUser.username}`}>
                            <Box display="flex" flexDirection="row">
                                <Typography pr="5px" sx={{ 
                                    fontSize: '15px', color:'black', fontWeight:'bold', transition:'.2s',
                                    ':hover':{transition:'.2s', textDecoration:'underline'}
                            }}>{tweetUser.name}</Typography>
                                <Typography pr="5px" sx={{ fontSize: '15px', color:'text.light' }}>{tweetUser.username}</Typography>
                            </Box>
                        </NavLink>
                        <Typography pr="5px" sx={{ fontSize: '15px', color:'text.light' }}> · {getTimeAgo(tweetCreationDate)}</Typography>
                    </Box>
                    <Box ref={ref} sx={{ position:'relative' }}>
                        <Box onClick={handleOnClickOptions}
                            sx={{ transition:'.2s', borderRadius:'99px',width:'30px',height:'30px', display:'flex', justifyContent:'center', alignItems:'center',
                            ':hover':{transition:'.2s', bgcolor:'#1d9cf02a', color:'primary.dark'}}}
                        >
                            <MoreHoriz 
                                sx={{ fontSize:'20px', color:'inherit'}}
                            />
                        </Box>
                        <List sx={{ position:'absolute', right:'0', top:'0', display:modal, bgcolor:'white', borderRadius:'5px', boxShadow:'2', p:'0' }}>
                            <ListItemButton sx={{ px: '30px' }} onClick={()=>openDeleteTweetModal({tweetID, deleteTweet})}>
                                <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                                    <DeleteOutline sx={{ color: 'rgb(255, 41, 77)', fontSize:'18px' }}/>
                                </Box>
                                <Typography sx={{ fontWeight:'bold', color:'rgb(255, 41, 77)', whiteSpace:'nowrap', fontSize:'14px' }}>Delete</Typography>
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>

                <Box color="black" mb={1.5} sx={{ wordBreak:'break-word'}}>{ tweetText }</Box>
                
                {/* 
                Archivos
                <Box>
                    <img style={{ objectFit: 'contain', width:'100%', borderRadius:'15px' }} src="/src/assets/images/Cvfoto.jpg"/>
                </Box> */}

                <Box pt={1} display="flex" flexDirection="row" maxWidth="425px" justifyContent="space-between">
                    <Box className="tweet-btn btn-comment">
                        <Box>
                            <ModeCommentOutlined sx={{ fontSize:'15px', color:'inherit'  }}/>
                        </Box>
                        <Typography display={tweetComments.length > 0 ? 'block' : 'none' } sx={{ fontSize:'14px' }}>{tweetComments.length}</Typography>
                    </Box>
                    <Box className="tweet-btn btn-retweet" onClick={ addRetweet }>
                        <Box>
                            <Repeat sx={{ fontSize:'15px', color: isRetweeted ? 'rgb(25, 177, 94)':'inherit'  }}/>
                        </Box>
                        <Typography
                            display={tweetRetweets.length > 0 ? 'block' : 'none' }
                            sx={{ fontSize:'14px', color: isRetweeted ? 'rgb(25, 177, 94)':'inherit' }}>
                                {tweetRetweets.length}
                        </Typography>
                    </Box>
                    <Box className={`tweet-btn btn-like`} onClick={ addLike }>
                        <Box>
                            {
                                isLiked
                                ? <Favorite sx={{ fontSize:'15px', color:'rgb(255, 31, 117)' }}/>
                                : <FavoriteBorder sx={{ fontSize:'15px', color:'inherit' }}/>
                            }
                            
                        </Box>
                        <Typography
                            display={tweetLikes.length > 0 ? 'block' : 'none' }
                            sx={{ fontSize:'14px', color: isLiked ? 'rgb(255, 31, 117)' : 'inherit' }}>
                                {tweetLikes.length}
                        </Typography>
                    </Box>
                    <Box className="tweet-btn">
                        <Box>
                            <BarChart sx={{ fontSize:'15px', color:'inherit'  }}/>
                        </Box>
                        <Typography px="12px" sx={{ fontSize:'14px' }}></Typography>
                    </Box>
                    <Box className="tweet-btn">
                        <Box>
                            <Share sx={{ fontSize:'15px', color:'inherit'  }}/>
                        </Box>
                        <Typography px="12px" sx={{ fontSize:'14px' }}></Typography>
                    </Box>
                </Box>

            </Box>

        </Box>

    </Box>
  )
}
