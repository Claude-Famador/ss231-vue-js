<template>
    <div>
        <h2>Leave a comment</h2>
        <form @submit.prevent="submitComment">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" require class="form-control">
            </div>
            <div class="form-group">
                <label for="comment">Comment:</label>
                <textarea id="comment" v-model="comment" required class="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <div v-if="submissionStatus" class="mt-2">
                {{ submissionStatus }}
            </div>
        </form>
    </div>    
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '../lib/supabaseClient';

const name = ref('');
const comment = ref('');
const successMessage = ref(null);
const errorMessage = ref(null);

// Initialize Supabase client with your URL and key
const supabaseUrl = 'https://krbtbymtmoidqumydcye.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyYnRieW10bW9pZHF1bXlkY3llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNTU3NjAsImV4cCI6MjA1MzgzMTc2MH0.Aojk6RPyGrOaSh9erPUImNVNGVTTyjX9DgjhJaasuXs'; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseKey);

async function submitComment() {
  successMessage.value = null;
  errorMessage.value = null;

  try {
    const { error } = await supabase
      .from('comments') // Replace 'comments' with your table name
      .insert([{ name: name.value, comment: comment.value }]);

    if (error) {
      throw error; // Re-throw the error to be caught below
    }

    successMessage.value = 'Comment submitted successfully!';
    name.value = ''; // Clear the form fields
    comment.value = '';
  } catch (error) {
    console.error('Error submitting comment:', error);
    errorMessage.value = 'Error submitting comment. Please try again later.';
  }
}
</script>

<style scoped>
.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5 rem;
}

.form-control {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.btn {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>