import styled from 'styled-components'

export const PageHeaderStyle= styled.div`
    .header {
        padding: 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        .menu {
            display: flex;
            height: 100%;
            border-bottom: 1px solid #f0f0f0;
            padding: 0 16%; 
            .item {
                padding: 0 20px;
                text-align: center;
                height: 100%;
                line-height: 64px;
                font-size: 16px;
                color: #1f1f1f;
                transition: none;
            }
            .item:active {
                margin: 0;
                color: white;
                background: #d3adf7;
            }
            .selected {
                margin: 0;
                color: white;
                background: #9254de
            }
        }
    }
}
`
