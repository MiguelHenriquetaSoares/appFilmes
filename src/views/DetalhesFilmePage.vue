<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonButton
} from '@ionic/vue'

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const filmes = [
  {
    id: 1,
    titulo: 'Interestelar',
    ano: 2014,
    faixa: '12+',
    descricao: 'Uma jornada espacial para salvar a humanidade.'
  },
  {
    id: 2,
    titulo: 'Batman: O Cavaleiro das Trevas',
    ano: 2008,
    faixa: '16+',
    descricao: 'Batman enfrenta o Coringa em Gotham.'
  },
  {
    id: 3,
    titulo: 'Toy Story',
    ano: 1995,
    faixa: 'Livre',
    descricao: 'Brinquedos ganham vida.'
  }
]

const filme = filmes.find(
  f => f.id === Number(route.params.id)
)
</script>

<template>
  <IonPage>
    <IonContent class="ion-padding fundo">

      <h1>{{ filme?.titulo }}</h1>

      <h2>{{ filme?.ano }}</h2>

      <p>{{ filme?.descricao }}</p>

      <p>Faixa etária: {{ filme?.faixa }}</p>

      <IonButton
        expand="block"
        @click="router.push('/filmes')"
      >
        Voltar
      </IonButton>

    </IonContent>
  </IonPage>
</template>

<style scoped>
.fundo {
  --background: linear-gradient(135deg,#ffffff,#ffffff);
  color: white;
}

h1 {
  margin-top: 50px;
}
</style>