<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton
} from '@ionic/vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')

const router = useRouter()

const entrar = () => {
  router.push('/filmes')
}
</script>

<template>
  <IonPage>
    <IonContent class="ion-padding fundo">

      <div class="container">
        <h1>CineVerse 🎬</h1>

        <IonInput
          v-model="email"
          label="Email"
          fill="outline"
        />

        <IonButton expand="block" @click="entrar">
          Entrar no App
        </IonButton>
      </div>

    </IonContent>
  </IonPage>
</template>

<style scoped>
.fundo {
  --background: linear-gradient(135deg,#141e30,#243b55);
}

.container {
  margin-top: 200px;
}

h1 {
  text-align: center;
  color: white;
  margin-bottom: 40px;
}
</style>