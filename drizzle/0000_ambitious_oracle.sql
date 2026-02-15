CREATE TABLE `mains` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `mains_name_unique` ON `mains` (`name`);--> statement-breakpoint
CREATE TABLE `meals` (
	`id` text PRIMARY KEY NOT NULL,
	`created` text DEFAULT (CURRENT_TIMESTAMP),
	`main_id` text NOT NULL,
	`secondary_id` text NOT NULL,
	`tertiary_id` text,
	`sauce_id` text,
	FOREIGN KEY (`main_id`) REFERENCES `mains`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`secondary_id`) REFERENCES `secondaries`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`tertiary_id`) REFERENCES `tertiaries`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`sauce_id`) REFERENCES `sauces`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `sauces` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `sauces_name_unique` ON `sauces` (`name`);--> statement-breakpoint
CREATE TABLE `secondaries` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `secondaries_name_unique` ON `secondaries` (`name`);--> statement-breakpoint
CREATE TABLE `tertiaries` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `tertiaries_name_unique` ON `tertiaries` (`name`);