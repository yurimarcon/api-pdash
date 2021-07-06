<template>
    <div 
    width="100%"
    height="100vh"
    class="ma-auto mt-16"
    >
        <v-card
        class="rounded-lg pt-3 mt-16"
        max-width="400"
        min-width="300"
        >
            <v-img
            contain
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaw4t8DM1Sen3UBSX6yUHK45TYF_yn1dXyNCS8A_cqaHgaS7FrlRKBzwJBwPXKHIJLoyU&usqp=CAU"
            height="200px"
            ></v-img>

            <v-card-title
            class="d-flex justify-center"
            >
                Seja bem vindo
            </v-card-title>

            <v-btn
            color="primary darken-3"
            class="Button-Login"
            type="submit"
            >
                <v-icon class="mr-2">mdi-microsoft-windows</v-icon>
                Entrar com AD
            </v-btn>
            <hr
            class="mb-3"
            >

            <form @submit.prevent="submit">
                <v-text-field
                class="mx-4"
                outlined
                label="Login"
                prepend-inner-icon="mdi-account-circle"
                ></v-text-field>

                <v-text-field
                class="mx-4"
                outlined
                label="Senha"
                prepend-inner-icon="mdi-lock"
                ></v-text-field>

                <v-btn
                outlined
                color="primary darken-3"
                class="Button-Login"
                type="submit"
                >
                    submit
                </v-btn>
                <a class="d-flex justify-center" href="#">Esqueci minha senha</a>

            </form>
        </v-card>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.Button-Login{
    margin-bottom: 4%;
    margin-left: 50%;
    transform: translateX(-50%);
}

</style>