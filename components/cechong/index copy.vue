<template>
  <div><DatePicker label="创建时间"  @change="change"></DatePicker>
  <WarehouseCard :warehouse="{
    name: '粮库名称'
  }"></WarehouseCard>
<WareDepotCard :warehouse="{
    name: '粮库名称'
  }"></WareDepotCard>
</div>
  </template>
<script>
import DatePicker from './zzzz/datePicker'
import WarehouseCard from './zzzz/warehouse'
import WareDepotCard from './zzzz/waredepot'

export default {
  components: {
    DatePicker,
    WarehouseCard,
    WareDepotCard
  },
  data () {
    return {
    }
  },
  methods: {
    change (range) {
      console.log(range.start.toISOString())
    }
  }

}
</script>
  <style>
  </style>
