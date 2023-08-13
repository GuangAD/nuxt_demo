<template>
  <a-card class="card">
    <tk-flex middle between>
      <tk-flex middle>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="30" height="30" viewBox="0 0 30 30"><defs><linearGradient x1="0.5" y1="0" x2="0.5" y2="1" id="master_svg0_242_006032"><stop offset="0%" stop-color="#FDC957" stop-opacity="1"/><stop offset="100%" stop-color="#FF8958" stop-opacity="1"/></linearGradient><clipPath id="master_svg1_177_81505"><rect x="6" y="6" width="18" height="18" rx="0"/></clipPath></defs><g><g><ellipse cx="15" cy="15" rx="15" ry="15" fill="url(#master_svg0_242_006032)" fill-opacity="1"/></g><g clip-path="url(#master_svg1_177_81505)"><g><path d="M8.397088293945313,11.71991796875C7.832282293945313,12.14498796875,7.500076122284312,12.81077796875,7.5000762939453125,13.51766796875L7.5000762939453125,20.25041796875C7.500076465606313,21.49301796875,8.507436293945313,22.50041796875,9.750076293945312,22.50041796875L12.000076293945312,22.50041796875C12.414296293945313,22.50041796875,12.750086293945312,22.16461796875,12.750086293945312,21.75041796875L12.750086293945312,19.50041796875C12.750086293945312,18.25781796875,13.757436293945313,17.25040796875,15.000086293945312,17.25040796875C16.24272629394531,17.25040796875,17.250086293945312,18.25781796875,17.250086293945312,19.50041796875L17.250086293945312,21.75041796875C17.250086293945312,22.16461796875,17.58587629394531,22.50041796875,18.000076293945312,22.50041796875L20.250076293945312,22.50041796875C21.49277629394531,22.50041796875,22.500076293945312,21.49301796875,22.500076293945312,20.25041796875L22.500076293945312,13.51766796875C22.500076293945312,12.81077796875,22.167876293945312,12.14498796875,21.603076293945314,11.71991796875L16.35308629394531,7.76817596875C15.551866293945313,7.16516496875,14.448296293945312,7.16516496875,13.647076293945313,7.76817596875L8.397088293945313,11.71991796875Z" fill="#FFFFFF" fill-opacity="1"/></g></g></g></svg>
        <tk-flex middle>
          <div class="p-l-12 font-15 font-bold">{{ warehouse.name }}</div>
          <div class="card-tag">方仓</div>
        </tk-flex>
      </tk-flex>
      <a-dropdown>
        <a-icon type="more" />
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <div class="w-80">基本信息</div>
            </a-menu-item>
            <a-menu-item>
              <div class="w-80">编辑</div>
            </a-menu-item>
            <a-menu-item>
              <div class="color-red-del w-80">删除</div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </tk-flex>
    <a-row  class="p-t-20 font-14 color-gray-card" :gutter="[34, 20]">
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :xxl="8">
        <div class="color-gray-cardtitle">点位</div>
        <div>12</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :xxl="8">
        <div class="color-gray-cardtitle">摄像头</div>
        <div>8</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :xxl="8">
        <div class="color-gray-cardtitle">是否有虫</div>
        <div>2</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :xxl="8">
        <div class="color-gray-cardtitle">含虫量</div>
        <div>186万</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :xxl="8">
        <div class="color-gray-cardtitle">长宽高(米)</div>
        <div>张三</div>
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" :xxl="8">
        <div class="color-gray-cardtitle">最新检测时间</div>
        <div>18630306363</div>
      </a-col>
    </a-row>
  </a-card>
</template>
<script>
export default {
  props: {
    warehouse: {
      type: Object,
      required: true
    }
  },
  name: 'WarehouseCard'
}
</script>

<style>
.card-tag{
  color: #94979C;
  background: #DDE0E5;
  font-size: 12px;
  margin-left: 5px;
  border-radius: 3px;
  padding: 0px 3px;
}
</style>
