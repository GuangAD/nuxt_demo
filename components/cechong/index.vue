<template>
  <div><DatePicker label="创建时间"  @change="change"></DatePicker>
  <WarehouseCard :warehouse="{
    name: '粮库名称'
  }"></WarehouseCard></div>
  </template>
<script>
import DatePicker from './zzzz/datePicker'
import WarehouseCard from './zzzz/warehouse'

export default {
  components: {
    DatePicker,
    WarehouseCard
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
