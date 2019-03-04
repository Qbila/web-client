<template>
  <!--<el-header class="layout__header&#45;&#45;guest">-->
    <!--<el-container>-->
    <header class="header--guest">
      <el-row>
        <el-col :span="4">
          <div class="header__logo--guest">
            <el-button type="text">Qbeela</el-button>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="header__nav--guest">
            <el-menu mode="horizontal">
              <!--<el-menu-item index="1">About Us</el-menu-item>-->
              <!--<el-menu-item index="2">Contribute</el-menu-item>-->
              <!--<el-menu-item index="3">Login</el-menu-item>-->
              <!--<el-submenu index="4">-->
                <!--<template slot="title">Workspace</template>-->
                <!--<el-menu-item index="4-1">item one</el-menu-item>-->
                <!--<el-menu-item index="4-2">item two</el-menu-item>-->
                <!--<el-menu-item index="4-3">item three</el-menu-item>-->
              <!--</el-submenu>-->
            </el-menu>
          </div>
        </el-col>
      </el-row>
    </header>
    <!--</el-container>-->
  <!--</el-header>-->
</template>
<style>
  .header--guest {
    background: #409EFF;
    position: fixed;
    width: 100%;
  }
  .header__logo--guest .el-button {
    height: 60px;
    font-size: 34px;
    color: #ffffff;
    margin-left: 20px;
  }
  .header__nav--guest {
    float: right;
  }
  .header__nav--guest .el-menu {
    background-color: transparent;
  }
  .header--guest .el-menu.el-menu--horizontal {
    border-bottom-width: 0px;
  }
  .header--guest .el-menu--horizontal>.el-menu-item {
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
  }
  .header--guest .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 1px solid #409EFF;
    color: #303133;
    background: #ffffff;
    border-top: 1px solid #409EFF;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    border-bottom: 1px solid #409EFF !important;
    color: #303133;
    background: #ffffff;
    border-top: 1px solid #409EFF;
  }
  .header__logo--guest .el-button--text:focus,
  .header__logo--guest .el-button--text:hover {
    color: #f3f3f3;
  }
  .header--guest .el-submenu__title {
    font-size: inherit;
    font-weight: bold;
    color: inherit;
  }
</style>
