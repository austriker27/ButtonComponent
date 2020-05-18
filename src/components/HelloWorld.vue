<template>
  <div class="hello">
    <div class="flex flex-wrap justify-between">
        <AppButton
            buttonText="button on light"
            :isDark="false"
        />
        <div class="m-4">

        </div>
        <AppButton
            buttonText="button on dark"
            isDark="true"
        />
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
export default {
  name: 'HelloWorld',
  components: {
      AppButton
  },
}
</script>