import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import {Context as AuthContext} from '../context/AuthContext'


export const Header = (props) => {
    const {state, signin, tryLocalSignin, logout} = useContext(AuthContext)
    const handleAuth = async () => {
        try {
            const result = await auth.signInWithPopup(provider)
            await signin(result.user.displayName, result.user.email, result.user.photoURL)
        }catch(err) {
            alert(err.message)
        }
    }
    useEffect(() => {
        const fetch = async () => {
            await tryLocalSignin()
        }
        fetch()
    }, [])
    return (
        <>
            <Nav>
                <Logo>
                    <img src="/images/logo.svg" />
                </Logo>
                
                <NavMenu>
                    <a href="/home">
                        <img src="/images/home-icon.svg"/>
                        <span>HOME</span>
                    </a>
                    <a href="/home">
                        <img src="/images/search-icon.svg"/>
                        <span>SEARCH</span>
                    </a>
                    <a href="/home">
                        <img src="/images/watchlist-icon.svg"/>
                        <span>WATCHLIST</span>
                    </a>
                    <a href="/home">
                        <img src="/images/original-icon.svg"/>
                        <span>ORIGINALS</span>
                    </a>
                    <a href="/home">
                        <img src="/images/movie-icon.svg"/>
                        <span>MOVIES</span>
                    </a>
                    <a href="/home">
                        <img src="/images/series-icon.svg"/>
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                {/* <Login onClick={handleAuth}>Login</Login> */}
                {
                    !state.token?
                    <Login onClick={handleAuth}>Login</Login>
                    :
                    <>
                        {console.log(state)}
                        <P onClick={logout}>{state.token.name}</P>
                    </>
                }
            </Nav>
        </>

    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img: {
        display: block;
        width:100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    @media (max-width: 768px) {
        display: none; 
    }
    a {
        display: flex;
        align-item: center;
        padding: 0 12px;
        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0;
            position: relative;
            white-space: nowrap;
        }
    }
`;

const Login = styled.a`
    cursor: pointer;
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid white;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    &:hover {
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
    }
`;

const P = styled.a`
    cursor: pointer;
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid white;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    &:hover {
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
    }
`;

export default Header
