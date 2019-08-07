/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider} from "styled-components"
import Navbar from './navbar'


const theme = {

  primary: 'rgb(68,68,68)',
  primaryOpacity: 'rgba(68,68,68,0.9)',
  primaryText: 'white',
  secondary: 'rgb(238,206,26)',
  secondaryText: 'rgb(238,206,26)',
  
  iconMixin: (size, color,breakpoint) => `
  color: ${color};
  width: ${size};
  height: ${size};
  @media(max-width:${breakpoint}){
    width: calc(${size}/2);
    height: calc(${size}/2);
  }
  `,

  hoverColorMixin: (color, time) =>`
  &:hover{
    color: ${color};
    transition: all ease-in-out ${time}s;
  }
  `,
  
}




const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
         
        }
      }
    }
  `)

  return (

    
    <ThemeProvider theme={theme}>

      <div>
        
          <main>{children}</main>
       
      </div>
    </ThemeProvider>
    

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
