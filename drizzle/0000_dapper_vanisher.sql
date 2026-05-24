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
CREATE TABLE `meals` (
	`id` text PRIMARY KEY NOT NULL,
	`date` text NOT NULL
);
