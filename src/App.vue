<script setup lang="ts">
import { Modal } from 'ant-design-vue'
import type { SelectValue } from 'ant-design-vue/es/select'
import { switchLanguage, i18n } from './i18n'
import { theme } from 'ant-design-vue'
// 根据 i18n 的 locale 切换 antd 的 locale
import enUS from 'ant-design-vue/es/locale/en_US'
import esES from 'ant-design-vue/es/locale/es_ES'
import ptBR from 'ant-design-vue/es/locale/pt_BR'
const { locale } = useI18n()
const map = {
  en: enUS,
  es: esES,
  pt: ptBR,
}

const options = [
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' },
  { label: 'Português', value: 'pt' },
]

const currentLocale = ref(locale.value)

const handleClick = () => {
  Modal.info({
    title: 'This is a notification message',
    content: 'This modal will be closed after 10 seconds',
    onOk: () => {
      console.log('OK')
    },
    onCancel: () => {
      console.log('Cancel')
    },
  })
}

const handleLocaleChange = (value: SelectValue) => {
  console.log(value, typeof value === 'string')
  if (typeof value === 'string') {
    switchLanguage(i18n, value)
    currentLocale.value = value
  }
}

const myTheme = computed(() => {
  // 配置可参考文档 https://antdv.com/docs/vue/customize-theme-cn
  return {
    token: {
      colorPrimary: '#00b96b',
    },
    algorithm: theme.compactAlgorithm,
  }
})

</script>

<template>
  <a-config-provider :locale="map[locale as keyof typeof map]" :theme="myTheme">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />
        <nav>
          <a-select v-model:value="currentLocale" :options="options" @change="handleLocaleChange" style="width: 120px;" />
          <a-date-picker />
          <a-button type="primary" @click="handleClick">Primary Button</a-button>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </a-config-provider>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
