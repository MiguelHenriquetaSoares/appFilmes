<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonBadge
} from '@ionic/vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const filmes = ref([
  {
    id: 1,
    titulo: 'Interestelar',
    ano: 2014,
    faixa: '12+',
    descricao: 'Uma jornada espacial.'
  },
  {
    id: 2,
    titulo: 'Batman: O Cavaleiro das Trevas',
    ano: 2008,
    faixa: '16+',
    descricao: 'Batman enfrenta o Coringa.'
  },
  {
    id: 3,
    titulo: 'Toy Story',
    ano: 1995,
    faixa: 'Livre',
    descricao: 'Brinquedos ganham vida.'
  }
])

const abrirDetalhes = (id: number) => {
  router.push('/detalhes/' + id)
}

const corFaixa = (faixa: string) => {
  if (faixa === 'Livre') return 'success'
  if (faixa === '12+') return 'warning'
  if (faixa === '16+') return 'danger'
  return 'dark'
}
</script>

<template>
  <IonPage>
    <IonContent class="ion-padding fundo">

      <h1>Catálogo de Filmes 🎥</h1>

      <IonCard
        v-for="filme in filmes"
        :key="filme.id"
        button
        @click="abrirDetalhes(filme.id)"
      >
        <IonCardHeader>
          <IonCardTitle>
            {{ filme.titulo }}
          </IonCardTitle>

          <IonCardSubtitle>
            {{ filme.ano }}
          </IonCardSubtitle>

          <IonBadge :color="corFaixa(filme.faixa)">
            {{ filme.faixa }}
          </IonBadge>

        </IonCardHeader>
      </IonCard>

    </IonContent>
  </IonPage>
</template>

<style scoped>
.fundo {
  --background: linear-gradient(135deg,#141e30,#243b55);
}

h1 {
  color: white;
  text-align: center;
}
</style>