<script lang="ts">
</script>

<div
	class="
overflow-hidden
grow flex flex-col
p-3"
>
	<div
		class="
flex flex-col
p-3 pb-5 gap-3
rounded-lg
p-1 px-2
border-2 border-neutral-800"
	>
		<div class="flex gap-2 items-center">
			<a href="./" class="flex items-center">
				<span class="text-lg material-icons"> arrow_back_ios_new </span>
			</a>
			<h1 class="text-2xl">Create event</h1>
			<div class="grow" />
		</div>
		<form
        on:submit={() => {

        }}
        action="./"
			class="
    flex flex-col
    gap-5
    rounded-lg
    "
		>
			<input
				type="text"
				id="name"
				placeholder="name"
				required
				class="
        p-2 px-4 rounded-full
        bg-neutral-200 dark:bg-neutral-800
        "
			/>

			<input
				type="text"
				id="desc"
				placeholder="desc"
				class="
        p-2 px-4 rounded-full
        bg-neutral-200 dark:bg-neutral-800
        "
			/>

			<div class="flex gap-3">
				<input
					type="datetime-local"
					id="start"
					required
					class="
            p-2 px-4 rounded-full
            bg-neutral-200 dark:bg-neutral-800
            "
				/>

				<input
					type="datetime-local"
					id="end"
					required
					class="
            p-2 px-4 rounded-full
            bg-neutral-200 dark:bg-neutral-800
            "
				/>
			</div>

			<input
				type="submit"
				value="Confirm"
				class="
        p-2 px-4
        bg-rose-400 dark:bg-rose-900
        rounded-full"
			/>
		</form>
	</div>
    <div class="grow" />
</div>
