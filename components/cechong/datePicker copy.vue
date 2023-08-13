<template>
  <tk-flex middle class="bg-w c-date-picker">
    <div class="p-x-10 p-y-5 unshrink unwrap label">{{ label }}</div>
    <a-range-picker v-model="ranges">
      <a-icon slot="suffixIcon" type="calendar" />
    </a-range-picker>
  </tk-flex>
</template>
<script>
export default {
  name: 'DatePicker',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      ranges: []
    }
  },
  watch: {
    ranges (newV) {
      console.log(newV)
      if (newV && newV.length === 2) {
        this.$emit('change', {
          start: newV[0].startOf('day'),
          end: newV[1].endOf('day')
        })
      }
    }
  }
}
</script>
<style>
.bg-w {
  background-color: white;
}
.unwrap {
  white-space: nowrap;
}
</style>

<style scoped lang="less">
.c-date-picker {
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
.label {
  border-right: 1px solid #d9d9d9;
}
.c-date-picker:hover {
  border: 1px solid #ff2a58;
}
::v-deep .ant-input {
  border: 0px;
}
::v-deep .ant-input:hover {
  border: 0px;
}
</style>
