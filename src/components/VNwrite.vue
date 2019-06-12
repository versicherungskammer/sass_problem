<template>
    <!-- Render textfield component -->
    <div class="mdc-card mdc-typography ">
        <h3 class="mdc-typography--headline3 title">{{title}}</h3>
        <div class="mdc-select" ref="kindOf">
            <i class="mdc-select__dropdown-icon"></i>
            <select class="mdc-select__native-control" v-model="selected_rechtsform" >
                <option v-for="option in kindOf" v-bind:value="option.value">
                {{ option.text }}
                </option> 
            </select>
            <label class="mdc-floating-label">Wähle eine Rechtsform aus</label>
            <div class="mdc-line-ripple"></div>
        </div>
        <div class="mdc-text-field name"   ref="uname" >
            <input class="mdc-text-field__input mdc-text-field--focused"
                                         autofocus type="text" pattern=".{2,50}" required
                                         id="name-input" name="name" v-model="name"  ref="unameInput" >
                                         <label class="mdc-floating-label" for="username-input">Name</label>
                                         <div class="mdc-line-ripple"></div>
        </div>
        <div class="mdc-text-field-helper-line">
            <div class="mdc-text-field-helper-text"></div>
        </div>



        <div class="mdc-text-field name" ref="adress">
            <input type="text" class="mdc-text-field__input"
                               pattern=".{2,50}"  required 
                               id="adress-input" name="adress"  ref="adress_input"
                                                                v-model="adress" 
                                                                >
                                                                <label class="mdc-floating-label" for="adress-input">Adresse</label>
                                                                <div class="mdc-line-ripple"></div>
        </div>
        <div class="mdc-text-field-helper-line">
            <div class="mdc-text-field-helper-text">Strasse mit Hausnummer oder Postfach</div>
        </div>


        <div class="mdc-text-field name" ref="postleitzahl">
            <input type="text" class="mdc-text-field__input" 
                               id="postleitzahl-input" name="postleitzahl"  ref="postleitzahl_input"
                                                                v-model="postleitzahl" 
                                                                >
                                                                <label class="mdc-floating-label" for="Poistleitzahl-input">Postleitzahl</label>
                                                                <div class="mdc-line-ripple"></div>
        </div>
        <div class="mdc-text-field-helper-line">
            <div class="mdc-text-field-helper-text">Poistleitzahl oder zip code</div>
        </div>









    </div>
</template>








<script lang="ts">
import fetch from 'unfetch';
import Vue from 'vue';
import {MDCTextFieldIcon} from '@material/textfield/icon';
import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import {MDCSelect} from '@material/select';

export default   {
    data() {
        return {
            selected_rechtsform: "UG",
            kindOf: [
                { text: 'Herr', value: 'Herr' },
                { text: 'Frau', value: 'Frau' },
                { text: 'Verein', value: 'Verein' },
                { text: 'GmbH', value: 'GmbH' },
                { text: 'UG', value: 'UG' }
            ],

            name: '',
            adress: '',
            postleitzahl:'',
            ort:'',
            land:'',
            email:'',
            homepage:''
        };
    },

    props: 
    {
        backend: {
            default: 'localhost:8083/partner',
                type: String
        },

            title: {
                default: 'Adressen',
                    type: String
            },

            register: {
                default: false,
                    type: Boolean
            },

            locStore: {
                default: true,
                    type: Boolean
            }
    },

    computed:{
    },
    methods: {
        send() {
            fetch(this.backend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: this.user,
                    password: this.password
                })
            }).then( r => {
                return r.json()}).then(data => {
                    if (data["status"]==200){ 
                        console.log(data["token"]);
                        this.$emit('clicked', {"token": data["token"],
                            "status":200});
                    }else{
                        this.$emit('clicked', {"status": data["status"]});
                    }
                });
        }, //EOF Method

    },

    mounted() { 
        new MDCTextField(this.$refs.uname);
        new MDCTextField(this.$refs.adress);
        new MDCTextField(this.$refs.postleitzahl);
        new MDCSelect(this.$refs.kindOf);
    },

}  


</script>
<!-- Default behavior of this component -->
<!-- Only importing the css needed not more -->
<!-- The imports are treated by webpack >>>>>> the assets-Dir is preprocessed by webpack-->

<style lang="scss" scoped>
@import "@material/textfield/mdc-text-field";
@import "@material/typography/mdc-typography";
@import '@material/floating-label/mdc-floating-label';
@import '@material/ripple/mdc-ripple';
@import '@material/button/mdc-button';
@import '@material/card/mdc-card';
@import '@material/typography/mdc-typography';
@import '@material/select/mdc-select';



.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: var(--mdc-floating-label-focused, black);
}
.container {
    display:   flex;
    align-items: center;
    justify-content: center;
}

.title {
}
</style>


