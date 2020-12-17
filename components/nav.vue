<template>
  <div id="nav">
    <div class="navbar">
      <img src="@/assets/img/tony.png" alt="" class="logo" />
      <div class="nav-item">
        <el-menu
          :router="true"
          :default-active="activeMenu"
          active-text-color="#409eff"
          mode="horizontal"
          text-color="#000"
        >
          <el-menu-item
            v-for="el of list"
            :key="el.index"
            :index="el.path"
            :router="el.path"
            >{{ el.name }}</el-menu-item
          >
        </el-menu>
      </div>
      <div class="right-menu">
        <div v-if="!hasLogin">
          <btn class="beforeLogin">登录</btn>
          <btn class="beforeLogin">注册</btn>
        </div>
        <div v-else>
          <el-popover
            trigger="hover"
            placement="bottom"
            popper-class="user-headimg-popper"
          >
            <!-- <section>
            <div class="home">
              <img
                class="avatar"
                :src="`${process.env.imgDomain}${baseInfo.headImg}`"
                alt=""
              />
              <span class="nickName">{{ baseInfo.nickName }}</span>
              <svg
                class="icon zhanji"
                aria-hidden="true"
                @click.stop="toUserInfo"
              >
                <use xlink:href="#icon-zhanji"></use>
              </svg>
            </div>
            <div v-show="baseInfo.isB5Plus" class="time">
              <img
                :class="{
                  isPlus: baseInfo.isB5Plus,
                  notPlus: !baseInfo.isB5Plus,
                }"
                class="user-plus-icon"
                src="@/assets/img/plus/plus-icon.png"
                alt=""
              />
              <div class="textAndTime-wrap">
                <img
                  :class="{
                    isPlus: baseInfo.isB5Plus,
                    notPlus: !baseInfo.isB5Plus,
                  }"
                  class="user-plus-logo"
                  src="@/assets/img/plus/plus-logo.png"
                  alt=""
                />
                <span class="leftTime">{{ baseInfo.endTime }}到期</span>
              </div>
            </div>
            <p class="logout" @click.stop="logout">
              {{ $t('index.nav.logout') }}
            </p>
          </section> -->
            <div slot="reference">
              <img
                :src="`https://img.b5csgo.com.cn/headImg/213933/1xyv8k35hv5lj-origin.jpg?x-oss-process=image/resize,m_fixed,w_184,h_184/format,jpg`"
                alt=""
                class="headImg"
              />
            </div>
          </el-popover>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasLogin: false,
      list: [
        {
          index: '1',
          path: '/',
          name: '首页',
        },
        {
          index: '2',
          path: '/articles',
          name: '文章',
        },
        {
          index: '3',
          path: '/archive',
          name: '归档',
        },
        {
          index: '4',
          path: '/project',
          name: '项目',
        },
        {
          index: '5',
          path: '/timeline',
          name: '历程',
        },
        {
          index: '6',
          path: '/message',
          name: '留言',
        },
        {
          index: '7',
          path: '/about',
          name: '关于',
        },
      ],
    }
  },
  computed: {
    // 通过计算属性将当前激活的menu传给default-active
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
  },
}
</script>

<style lang="scss" scoped>
#nav {
  width: 100%;
  border-bottom: 1px solid #eeeeee;
}
.navbar {
  height: 100px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  .logo {
  }
}
</style>
