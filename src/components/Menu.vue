<template>
    <div id="menu">
        <div v-on:click="toggleMenuAndOpacity" class="close">
            <div class="close-icon">
                <Close />
            </div>
            <div class="hamburger-icon">
               <Hamburger />
            </div>
        </div>
        <nav>
            <div class="menu">
                <div class="single-item parent">
                    <router-link :to="{path: '/'}" exact class="nav-item">Strona główna</router-link>
                </div>
                <div v-for="(item, key) in menu" v-bind:key="key" class="single-item parent" :class="{'dropdown-open': openDropdowns[key]}">
                    <router-link 
                        v-if="item.type == 'page'"
                        :to="{ path: '/' + item.full_slug }"
                        class="nav-item"
                        exact
                    >
                        {{item.title}}
                    </router-link>
                    <div class="arrow-head" v-if="item['child-pages']" v-on:click="toggleDropdown(key)"></div>
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
import Hamburger from "./icons/Hamburger.vue";
import Close from "./icons/Close.vue";
export default {
    name: 'Menu',
    components: {
        Hamburger,
        Close
    },
    props: {
        menu: Object
    },
    data () {
        return {
            menuClosed: true,
            openDropdowns: {},
            menuActive: false
        }
    },
    methods: {
        toggleMenuAndOpacity(){
            const menu = document.getElementById('menu');
            const content = document.getElementById('main-content');
            menu.classList.toggle('active');
            content.classList.toggle('menu-active');
        },
        toggleDropdown(key) {
            this.$set(this.openDropdowns, key, !this.openDropdowns[key]);
        },
        createOpenDropdowns() {
            for ( var key in this.menu ) {
                this.$set(this.openDropdowns, key, false);
            }
        }
    },
    watch: {
        
    },
    created: function () {
        this.createOpenDropdowns();
    }
}
</script>

<style  lang="scss" scoped>
@import '../styles/vars';

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
        left: -60px;
        padding: 15px;
        cursor: pointer;
        .hamburger-icon {
            width: 28px;
        }
        .close-icon {
            width: 22px;
            display: none;
        }
    }
    nav{
        div{
            a{
                display: block;
                margin: 0 10px;
                text-decoration: none;
                font-weight: 700;
                color: #fff;
                &:hover{
                    color: $pink;
                }
            }
            a.router-link-active{
                color: $pink;
            }
            p{
                margin: 0;
                font-weight: 700;
            }
        }
        .parent{
            position: relative;
            padding: 15px 20px 15px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            .arrow-head {
                position: absolute;
                right: 5px;
                top: 18px;
                width: 15px;
                height: 15px;
                color: #fff;
                background-image: url('../assets/arrow-head-down-white.svg');
                background-size: contain;
                background-repeat: no-repeat;
                cursor: pointer;
                &:hover {
                    background-image: url('../assets/arrow-head-down-pink.svg');
                }
            }
            &.dropdown-open{
               .arrow-head {
                   background-image: url('../assets/arrow-head-up-white.svg');
                   &:hover {
                       background-image: url('../assets/arrow-head-up-pink.svg');
                   }
               }
               .dropdown{
                   display: block;
               }
            }
            .dropdown{
                display: none;
                padding-top: 10px;
                padding-left: 10px;
                a{
                    display: block;
                    font-weight: 400;
                }
            }
        }
    }
}
#menu.active{
    right: 0px;
    .hamburger-icon {
        display: none;
    }
    .close-icon {
        display: block;
    }
}
</style>
