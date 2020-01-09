<template>
    <v-content>
        <v-container fluid>
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col cols="10">
                    <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                    >
                        <v-text-field
                                v-model="name"
                                :counter="10"
                                :rules="nameRules"
                                label="Name"
                                required
                        />
                        <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                        />

                        <v-textarea
                            v-model="message"
                            label="Your message"
                        />
                        <v-btn
                                :disabled="!valid"
                                color="success"
                                class="mr-4"
                        >
                            Send
                        </v-btn>

                        <v-btn
                                color="error"
                                class="mr-4"
                                @click="reset"
                        >
                            Reset
                        </v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "FeedBack",
        data: () => ({
            valid: true,
            message: '',
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        }),
        methods: {
            reset: function () {
                this.message = ''
                this.name = ''
                this.email = ''
            }
        }
    }
</script>

<style scoped>

</style>
