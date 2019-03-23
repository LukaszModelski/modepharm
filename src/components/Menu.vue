<template>
    <div id="menu">
        <div v-on:click="toggleMenuAndOpacity" class="close">
            X
        </div>
        <nav>
            <div v-for="item in menu">
                <router-link 
                v-if="item.parent == 0 && item.type == 'page'"
                :to="{ path: '/page/' + item.page_id }"
                class="nav-item"
                >
                {{item.title}}
                </router-link>
                <p v-if="item.parent == 0 && item.type == 'custom'">
                test
                </p>
                <div class="dropdown">
                <router-link 
                    v-for="subitem in menu" :key="subitem.page_id"
                    v-if="subitem.parent == item.menu_id"
                    :to="{ path: '/page/' + subitem.page_id }"
                    class="nav-item"
                >
                    {{subitem.title}}
                </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Menu',
        props: {
            menu: Array
        },
        data () {
            return {
                menuClosed: true
            }
        },
        methods: {
            toggleMenuAndOpacity(){
                const menu = document.getElementById('menu');
                const content = document.getElementById('main-content');
                menu.classList.toggle('active');
                content.classList.toggle('menu-active');
            }
        },
        watch: {
            
        },
        created: function () {

        }
    }
</script>

<style  lang="scss" scoped>
#menu.active{
    right: 0px;
}
#menu{
    position: fixed;
    z-index: 10;
    top: 0;
    right: -400px;
    height: 100vh;
    width: 400px;
    max-width: 100%;
    background-color: green;
    transition: right 0.3s ease-in;
    padding: 30px;
    box-sizing: border-box;
    .close{
        position: absolute;
        top: 0;
        left: -50px;
        padding: 15px;
        cursor: pointer;
    }
    nav{
        div{
            a{
                margin: 0 10px;
                text-decoration: none;
                font-weight: 700;
                color: #000;
            &:hover{
                color: blue;
            }
        }
            a.router-link-active{
                color: blue;
            }
            p{
            margin: 0;
            font-weight: 700;
            }
        }
        .dropdown{
            a{
            display: block;
            font-weight: 400;
            }
        }
    }
}
</style>
