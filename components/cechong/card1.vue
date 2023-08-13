<template>
  <a-card>
    <div class="flex items-center flex-justify-between">
      <div class="flex items-center">
        <img class="h-30 w-30" src="../../assets/images/warehouse.png" />
        <div class="pl-12">{{ props.warehouse.name }}</div>
      </div>
      <a-dropdown>
        <iconfont type="icon-more" />
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <div class="w-60">编辑</div>
            </a-menu-item>
            <a-menu-item>
              <div class="color-red-del w-60">删除</div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
    <a-row class="pt-20" :gutter="[34, 20]">
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :xxl="6">
        <div>粮仓</div>
        <div>12</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :xxl="6">
        <div>有虫</div>
        <div>8</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :xxl="6">
        <div>无虫</div>
        <div>2</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :xxl="6">
        <div>含虫量</div>
        <div>186万</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :xxl="6">
        <div>负责人</div>
        <div>张三</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :xxl="6">
        <div>负责人电话</div>
        <div>18630306363</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :xxl="6">
        <div>联系人</div>
        <div>张三</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :xxl="6">
        <div>联系人电话</div>
        <div>18630306363</div>
      </a-col>
    </a-row>
    <div class="pt-17">地址</div>
    <div>石家庄长安区建华大街101号</div>
  </a-card>
</template>
<script setup lang="ts">
const props = defineProps({
  warehouse: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="less" scoped></style>
