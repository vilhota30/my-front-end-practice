import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { Box, List, ListItem, styled } from '@mui/material';

const StyledList = styled(List)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '40px', 
  width: '100%',
  height: '60px',
  paddingLeft: '40px',
  margin: 0,
  gap: '12px',
  listStyle: 'none',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'whitesmoke',
  },
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'whitesmoke',
  },
  '&.active': {
    color: '#0dcaf0 !important',
  },
  '&.pending': {
    color: '#b7b7b7 !important',
  },
}));

export function Navigation({ navAttrs }) {
  return (
    <Box component="nav" {...navAttrs} sx={{backgroundColor: '#009bb4'}}>
      <StyledList>
        <ListItem>
          <StyledNavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? 'active' : isPending ? 'pending' : ''
            }
          >
            HOME
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/todolist">TODO-LIST</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/swapi">SWAPI</StyledLink>
        </ListItem>
      </StyledList>
    </Box>
  );
}
