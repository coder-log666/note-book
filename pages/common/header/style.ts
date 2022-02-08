import styled from 'styled-components'

export const PageHeaderStyle= styled.div`
.header {
    .menu {
        height:64px;
        background-color: white;
        border-bottom: 1px solid #f0f0f0;
        padding: 0 10%;
        display: flex;
        float: left;
        width: 100%;

        a {
            text-decoration:none;
        }

        .item {
            width: 80px;
            font-size: 16px;
            color: #000000;
            line-height: 64px;
            text-align:center;
        }
        .item:hover{
            color: #434343;
            cursor: pointer;
        }
        .selected {
            background: #1890ff
        }
    }
}
`
