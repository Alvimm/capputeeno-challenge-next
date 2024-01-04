"use client"

import styled from "styled-components"

export const DefaultPageLayout = styled.div`
    padding: 12px 24px;
    min-height: calc(100vh - 33px - 33px);
    background-color: var(--bg-primary);

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
    padding: 34px 160px;
    min-height: calc(100vh - 50px - 50px);
  }
  `