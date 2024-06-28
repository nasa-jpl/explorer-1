<template>
  <table class="DynamicTokensTable table-autotext-sm">
    <thead>
      <tr>
        <th class="text-left w-1/2">Color</th>
        <th class="text-left">Name</th>
        <th class="text-left">Token</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="bg-primary-light p-4"></div>
        </td>
        <td>Primary light</td>
        <td><code class="text-sm">primary-light</code></td>
      </tr>
      <tr>
        <td>
          <div class="bg-primary p-4"></div>
        </td>
        <td>Primary</td>
        <td><code class="text-sm">primary</code></td>
      </tr>
      <tr>
        <td>
          <div class="bg-primary-dark p-4"></div>
        </td>
        <td>Primary dark</td>
        <td><code class="text-sm">primary-dark</code></td>
      </tr>
      <tr>
        <td>
          <div class="bg-primary-darker p-4"></div>
        </td>
        <td>Primary darker</td>
        <td><code class="text-sm">primary-darker</code></td>
      </tr>
      <tr>
        <td>
          <div class="bg-secondary-light p-4"></div>
        </td>
        <td>Secondary light</td>
        <td><code class="text-sm">primary-light</code></td>
      </tr>
      <tr>
        <td>
          <div class="bg-secondary p-4"></div>
        </td>
        <td>Secondary</td>
        <td><code class="text-sm">primary</code></td>
      </tr>
      <tr>
        <td>
          <div class="bg-secondary-dark p-4"></div>
        </td>
        <td>Secondary dark</td>
        <td><code class="text-sm">primary-dark</code></td>
      </tr>
      <tr>
        <td>
          <div class="bg-secondary-darker p-4"></div>
        </td>
        <td>Secondary darker</td>
        <td><code class="text-sm">primary-darker</code></td>
      </tr>
      <tr>
        <td>
          <div class="bg-action-light p-4"></div>
        </td>
        <td>Action light</td>
        <td><code class="text-sm">action-light</code></td>
      </tr>
      <tr>
        <td>
          <div class="bg-action p-4"></div>
        </td>
        <td>Action</td>
        <td><code class="text-sm">action</code></td>
      </tr>
      <tr>
        <td>
          <div class="bg-action-dark p-4"></div>
        </td>
        <td>Action dark</td>
        <td><code class="text-sm">action-dark</code></td>
      </tr>
      <tr>
        <td>
          <div class="bg-action-darker p-4"></div>
        </td>
        <td>Action darker</td>
        <td><code class="text-sm">action-darker</code></td>
      </tr>
    </tbody>
  </table>
</template>
<style lang="scss">
.DynamicTokensTable {
  .ThemeVariantDark & {
    @apply text-white #{!important};
  }
  td,
  th {
    @apply px-2;
  }
}
</style>
