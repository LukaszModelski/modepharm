<template>
    <div id="menu">
        <div v-on:click="toggleMenuAndOpacity" class="close">
            X
        </div>
        <nav>
            <div class="menu">
                <div class="single-item parent">
                    <router-link :to="{path: '/'}" exact class="nav-item">Strona główna</router-link>
                </div>
                <div v-for="(item, key) in menu" class="single-item parent">
                    <router-link 
                        v-if="item.type == 'page'"
                        :to="{ path: '/' + item.full_slug }"
                        class="nav-item"
                        exact
                    >
                    {{item.title}}
                    </router-link>
                    <div class="dropdown">
                        <router-link 
                            v-for="subitem in item['child-pages']" :key="subitem.page_id"
                            :to="{ path: '/' + subitem.full_slug }"
                            class="nav-item"
                            exact
                        >
                            {{subitem.title}}
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Menu',
        props: {
            menu: Object
        },
        data () {
            return {
                menuClosed: true,
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
@import '../styles/vars';

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
    background-color: $gray;
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
        .parent{
            margin-top: 10px;
        }
        .dropdown{
            // padding-bottom: 10px;
            a{
                display: block;
                font-weight: 400;
            }
        }
    }
}
</style>
