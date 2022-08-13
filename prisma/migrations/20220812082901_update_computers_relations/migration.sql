-- AddForeignKey
ALTER TABLE "computers" ADD CONSTRAINT "computers_motherboard_fkey" FOREIGN KEY ("motherboard") REFERENCES "hardwares"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computers" ADD CONSTRAINT "computers_cpu_fkey" FOREIGN KEY ("cpu") REFERENCES "hardwares"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computers" ADD CONSTRAINT "computers_gpu_fkey" FOREIGN KEY ("gpu") REFERENCES "hardwares"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computers" ADD CONSTRAINT "computers_drive_fkey" FOREIGN KEY ("drive") REFERENCES "hardwares"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computers" ADD CONSTRAINT "computers_font_fkey" FOREIGN KEY ("font") REFERENCES "hardwares"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computers" ADD CONSTRAINT "computers_ram_fkey" FOREIGN KEY ("ram") REFERENCES "hardwares"("id") ON DELETE SET NULL ON UPDATE CASCADE;
