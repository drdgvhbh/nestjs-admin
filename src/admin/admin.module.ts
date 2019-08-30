import { Module } from '@nestjs/common'
import { AdminUserEntity, DefaultAdminModule } from '@app/nestjs-admin'
import { AdminSite } from './admin'
import { AdminController } from './admin.controller'
import { AdminUserService } from '@app/nestjs-admin'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([AdminUserEntity]), DefaultAdminModule],
  providers: [AdminSite, AdminUserService],
  exports: [AdminSite],
  controllers: [AdminController],
})
export class AdminModule {
  constructor(private readonly adminSite: AdminSite) {
    adminSite.register('Administration', AdminUserEntity)
  }
}
