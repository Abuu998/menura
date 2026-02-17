CREATE TABLE `dishes` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`type` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `dishes_name_unique` ON `dishes` (`name`);--> statement-breakpoint
CREATE TABLE `dishes_to_meals` (
	`dish_id` text NOT NULL,
	`meal_id` text NOT NULL,
	PRIMARY KEY(`dish_id`, `meal_id`),
	FOREIGN KEY (`dish_id`) REFERENCES `dishes`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`meal_id`) REFERENCES `meals`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
DROP TABLE `mains`;--> statement-breakpoint
DROP TABLE `sauces`;--> statement-breakpoint
DROP TABLE `secondaries`;--> statement-breakpoint
DROP TABLE `tertiaries`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_meals` (
	`id` text PRIMARY KEY NOT NULL,
	`created` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`dish_id` text NOT NULL,
	FOREIGN KEY (`dish_id`) REFERENCES `dishes`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_meals`("id", "created", "dish_id") SELECT "id", "created", "dish_id" FROM `meals`;--> statement-breakpoint
DROP TABLE `meals`;--> statement-breakpoint
ALTER TABLE `__new_meals` RENAME TO `meals`;--> statement-breakpoint
PRAGMA foreign_keys=ON;