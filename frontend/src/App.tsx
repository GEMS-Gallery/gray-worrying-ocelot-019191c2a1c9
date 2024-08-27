import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { backend } from 'declarations/backend';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 0,
  boxShadow: 'none',
  border: '1px solid #000000',
  marginBottom: theme.spacing(3),
}));

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  timestamp: string;
}

function App() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await backend.getPosts();
        setPosts(result);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Box>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
        Crypto Blog
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {post.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  {post.content.substring(0, 150)}...
                </Typography>
                <Typography variant="caption" display="block">
                  By {post.author} | {new Date(post.timestamp).toLocaleDateString()}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;